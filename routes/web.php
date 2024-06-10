<?php

use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
     $order = Order::all();
    dd($order);
    return OrderResource::collection( $order );
    // return ['Laravel' => app()->version()];
});


require __DIR__ . '/auth.php';

Route::get("/order", function($user){
   
})->name("order");