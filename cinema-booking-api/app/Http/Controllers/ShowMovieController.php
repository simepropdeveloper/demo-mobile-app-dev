<?php

namespace App\Http\Controllers;

use App\Models\Cinema;
use App\Events\SeatEvent;
use App\Models\MovieShow;
use App\Models\CinemaHall;
use App\Models\HallAndSeat;
use Illuminate\Http\Request;
use App\Models\CinemaAndHall;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

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
        ->join('cinema','cinema.cinema_id','=','cinema_hall.cinema_id')
        ->select('movie_show.*','cinema_seat.*','cinema_hall.cinema_hall_name','hall_and_seat.status','cinema.*')
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

    public function update(Request $request, String $id){
        $seat = DB::table('hall_and_seat')->where('cinema_hall_id',$id)
        ->where('seat_number',$request->input("seat_number"))->update(["status"=>$request->input("status")]);
        
       if ($seat){
        $updated = DB::table('hall_and_seat')->where('cinema_hall_id',$id)
        ->where('seat_number',$request->input("seat_number"))->first();
        //  event(new SeatEvent( $seat->get()->find($seat->id) ));
        event(new SeatEvent(HallAndSeat::find($updated->id)));
        return $this->index($request->input('movie_id'));
        // return response(['results' => $updated->id, 'status' => 200]);
       }
        // return $this->index();
        return response(['results' => 'already update', 'status' => 200]);
    }
}
