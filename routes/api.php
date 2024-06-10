<?php

use App\Http\Controllers\OrderController;
use App\Http\Resources\NdiziResource;
use App\Http\Resources\OrderResource;
use App\Models\Ndizi;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\ValidationException;

Route::middleware(['auth:sanctum'])->post('/logout', function(Request $request){
    $request->user()->currentAccessToken()->delete();
    return response()->noContent();
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware(['auth.sanctum'])->post('/test-scrf', fn ()=>[1,2,3]);

Route::post("/login",function(Request $request){
    $request->validate([
        'email'=>['required','email'],
        'password'=>['required'],
        'device_name' => ['required'],
    ]);
    $user = User::where('email',$request->email)->first();
    if(!$user|| !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages(
            ['email'=> 'The credential provied are incorrect']
        );
    }
    return response()->json([ 
        'token'=>$user->createToken($request->device_name)->plainTextToken
    ]);
}); 

Route::post('/signup',function(Request $request){
    $request->validate([
        'name'=>['required'],
        'email'=>['required','email','unique:users,email'],
        'password'=>['required'],
        'location'=> ['required'],
        'phone'=>['required'],
        'user_type'=>['required'],
    ]);
    
    $user = User::create([
        'name'=>$request->name,
        'email'=>$request->email,
        'password'=>Hash::make($request->password),
        'location'=>$request->location,
        'phone'=>$request->phone,
        'user_type'=>$request->user_type,
    ]);
     return response()->json([ 
        'token'=>$user->createToken($request->device_name)->plainTextToken
    ]);
});

Route::post('add',function(Request $request){
    // $request->validate([
    //     'kiasi'=>['required'],
    //     'bei'=>['required',"numeric"],
    //     'aina'=>['required'],
    //     'user_id'=>['required'],
    //     'image'=>['required',File::image()->max(3*1024)],
    // ]);
    // $product = Ndizi::create(array_merge($request->all(),$request->all()));



     $validatedData = $request->validate([
            'kiasi'=>['required'],
            'bei'=>['required',"numeric"],
            'aina'=>['required'],
            'user_id'=>['required'],
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $validatedData['image_path'] = $path;
        }

        $product = Ndizi::create($validatedData);

        return response()->json(['product' => $product], 201);
});

Route::get('/data{user}',function($user){
    $ndizi = Ndizi::where('user_id',$user)->latest()->get();
    return NdiziResource::collection( $ndizi );
});

Route::get('/all',function(){
    $ndizi = Ndizi::latest()->get();
    return NdiziResource::collection( $ndizi );
});

Route::post("/makeorder",[OrderController::class,"store"]);

Route::get("/order{user}",[OrderController::class,"show"]);
Route::get("/farmer{user}",[OrderController::class,"farmer"]);
Route::put("/update{id}",[OrderController::class,"update"]);