<?php

namespace App\Models;

use App\Models\Cinema;
use App\Models\CinemaSeat;
use App\Models\HallAndSeat;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CinemaHall extends Model
{
    use HasFactory;

    protected $table ='cinema_hall';
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    protected $fillable = [
        "cinema_hall_name",
    ];

    public function seats()
    {
        return $this->belongsToMany(CinemaSeat::class,'hall_and_seat')
            ->using(HallAndSeat::class);
    }
    public function cinemas()
    {
        return $this->belongsToMany(Cinema::class,"cinema_and_hall")
            ->using(CinemaAndHall::class);
    }
    
}
