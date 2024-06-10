<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "product_id"=> new NdiziResource($this->order),
            "buyer_id"=> new UserResource($this->buyer),
            "farmer_id"=> new UserResource($this->farmer),
            // "product_id"=> $this->product_id,
            // "buyer_id"=> $this->buyer_id,
            // "farmer_id"=> $this->farmer_id,
            
            "status"=> $this->status,
        ];
    }
}