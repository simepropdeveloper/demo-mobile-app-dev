<?php

namespace App\Http\Controllers;

use App\Models\Cinema;
use Illuminate\Http\Request;

class CinemaController extends Controller
{
    protected $model;

    public function __construct(Cinema $show)
    {
        $this->model = $show;
    }

    public function index($id)
    {
        $items = $this->model->where('city',$id)->get();
        
        return response(['results' => $items, 'status' => 200]);
    }
}
