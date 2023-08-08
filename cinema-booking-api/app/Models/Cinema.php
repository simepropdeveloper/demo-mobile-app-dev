<?php

namespace App\Models;

use App\Models\CinemaHall;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cinema extends Model
{
    use HasFactory;

    protected $table ='cinema';
    protected $primaryKey = 'cinema_id';
    protected $keyType = 'string';
    protected $fillable = [
        "cinema_name",
        "city"
    ];

    public function halls()
    {
        return $this->belongsToMany(CinemaHall::class,"cinema_and_hall")
            ->using(CinemaAndHall::class);
    }

}
