<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return view('cinemaApp');
});
 
Route::get('/movies', [MovieController::class, 'collection']);
Route::get('/movies/{id}', [MovieController::class, 'detail']);
Route::post('/movies/create', [MovieController::class, 'create']);