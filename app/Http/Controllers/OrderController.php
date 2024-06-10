<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "product_id"=> "required|numeric",
            "farmer_id"=> "required|numeric",
            "buyer_id"=> "required|numeric",
        ]);
        $order = Order::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order, $user)
    {
        $data = $order->where("buyer_id", $user)->latest()->get(); 
        return OrderResource::collection($data);
    }
    public function farmer(Order $order,$user){
        $data = $order->where("farmer_id", $user)->latest()->get(); 
            return OrderResource::collection($data);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $order  = Order::findOrFail($id);
        $request->validate([
            "status"=>"required"
        ]);
        $order->update($request->all());
        return response()->json(["message"=>"Oda ime haririwa"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}