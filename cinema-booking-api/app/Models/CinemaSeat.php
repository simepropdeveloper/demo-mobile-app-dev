<?php

namespace App\Models;

use App\Models\CinemaHall;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CinemaSeat extends Model
{
    use HasFactory;

    protected $table ='cinema_seat';
    
    protected $fillable = [
        "type",
        "price",
    ];

   
}
