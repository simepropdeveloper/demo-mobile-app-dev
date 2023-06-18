<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subscriber extends Model
{
    protected $table      = 'booking_subscriber';
    protected $guarded    = [];
    public    $timestamps = true;

    protected $fillable = [
        'user_id',
        'movie_id',
        'has_order'
    ];
}
