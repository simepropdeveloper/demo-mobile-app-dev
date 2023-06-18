<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return view('cinemaApp');
});
 
Route::get('/movies', [MainController::class, 'MovieCollection']);
Route::get('/slot', [MainController::class, 'SlotCollection']);
Route::get('/location', [MainController::class, 'LocationCollection']);
Route::get('/state', [MainController::class, 'StateCollection']);
Route::get('/accounts', [MainController::class, 'AccountCollection']);
Route::get('/subscribe', [MainController::class, 'ViewSubscriber']);
Route::get('/book-ticket', [MainController::class, 'ViewTicket']);
Route::get('/runscript', [MainController::class, 'FillDataScript']);

Route::post('/subscribe', [MainController::class, 'AddSubscriber']);
Route::post('/book-ticket', [MainController::class, 'SaveTicket']);