<?php

use App\Http\Resources\NdiziResource;
use App\Models\Ndizi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;

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
        'name'=>['required','name'],
        'email'=>['required','email'],
        'password'=>['required'],
        'location'=> ['required'],
        'phone'=>['required'],
        'user_type'=>['required'],
    ]);
    $user = User::create(array_merge($request->all(),$request->all()));
});

Route::post('add',function(Request $request){
    $request->validate([
        'kiasi'=>['required'],
        'bei'=>['required',"numeric"],
        'aina'=>['required'],
        'user_id'=>['required'],
        'image'=>['file'],
    ]);
    $product = Ndizi::create(array_merge($request->all(),$request->all()));
});

Route::get('/data{user}',function($user){
    $ndizi = Ndizi::where('user_id',$user)->get();
    return NdiziResource::collection( $ndizi );
});

Route::get('/all',function(){
    $ndizi = Ndizi::all();
    return NdiziResource::collection( $ndizi );
});