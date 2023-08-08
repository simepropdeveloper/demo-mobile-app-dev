<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CinemaAndHall extends Model
{
    use HasFactory;

    protected $table = 'cinema_and_hall';
    protected $fillable = [
        "cinema_id",
        "cinema_hall_id"
    ];
 
}
