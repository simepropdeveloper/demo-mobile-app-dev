<?php

namespace App\Models;

use App\Models\CinemaHall;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MovieShow extends Model
{
    use HasFactory;
    
    protected $table ='movie_show';
    
    protected $fillable = [
        "cinema_hall_id",
        "movie_id",
        "date",
        "start_time",
        "end_time"
    ];

    public function cinemaHall()
    {
        return $this->belongsTo(CinemaHall::class)
            ->withDefault([
                'cinema_hall_name' => 'NOT FOUND',
                'cinema_id' => 'WITHOUT ID',
            ]);
    }
}
