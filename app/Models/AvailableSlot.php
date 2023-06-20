<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AvailableSlot extends Model
{
    protected $table      = 'available_slot';
    protected $guarded    = [];
    public    $timestamps = true;

    protected $fillable = [
        'slot_time'
    ];
}
