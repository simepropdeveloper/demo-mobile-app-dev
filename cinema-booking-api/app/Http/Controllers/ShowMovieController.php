<?php

namespace App\Http\Controllers;

use App\Models\Cinema;
use App\Models\MovieShow;
use App\Models\CinemaHall;
use Illuminate\Http\Request;
use App\Models\CinemaAndHall;
use Illuminate\Support\Carbon;

class ShowMovieController extends Controller
{
    protected $model;

    public function __construct(MovieShow $show)
    {
        $this->model = $show;
    }

    public function index($id)
    {
        $items = $this->model->where('movie_id',$id)->whereDate('date','>=',Carbon::today()->format('Y/m/d'))
        ->join('hall_and_seat','hall_and_seat.cinema_hall_id','=','movie_show.cinema_hall_id')
        ->join('cinema_seat','hall_and_seat.seat_number','=','cinema_seat.seat_number')
        ->join('cinema_hall','hall_and_seat.cinema_hall_id','=','cinema_hall.cinema_hall_id')
        ->select('movie_show.*','cinema_seat.*','cinema_hall.cinema_hall_name','hall_and_seat.status')
        ->get();
        if ($items){
            return response(['results' => $items, 'status' => 200]);
        }else{
            return response()->json(['status'=> 404, 'message'=>'No show found!']);
        }
        // $items = Cinema::join('cinema_and_hall','cinema.cinema_id','=','cinema_and_hall.cinema_id')->get();
        // $items = $this->model->get();
        // $items = $this->model->with('halls')->get();
        
        return response(['results' => $items, 'status' => 200]);
    }
}
