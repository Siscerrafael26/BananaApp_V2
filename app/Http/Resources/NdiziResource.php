<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NdiziResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'aina'=>$this->aina,
            'id'=>$this->id,
            'bei'=>$this->bei,
            'kiasi'=>$this->kiasi,
            'user_id' => new UserResource($this->product),
        ];
    }
}