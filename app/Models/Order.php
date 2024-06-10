<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ["product_id","buyer_id","farmer_id","status"];
    public function order(){
        return $this->belongsTo(Ndizi::class,"product_id");
    }
    public function farmer(){
        return $this->belongsTo(User::class,"farmer_id");
    }
    public function buyer(){
        return $this->belongsTo(User::class,"buyer_id");
    }
}