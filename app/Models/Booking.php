<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table      = 'booking';
    protected $guarded    = [];
    public    $timestamps = true;

    protected $fillable = [
        'user_id',
        'movie_id',
        'slot_id',
        'paid_amount',
        'pax',
        'date',
        'location',
    ];
}
