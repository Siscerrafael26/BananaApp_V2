<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ndizi extends Model
{
    use HasFactory;

    protected $fillable = ["user_id", "aina", "bei", "kiasi", "image"];

    public function product()
    {
        return $this->belongsTo(User::class, "user_id");
    }
}