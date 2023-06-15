<?php
 
namespace App\Http\Controllers;
 
use App\Models\Movie;
use App\Models\Account;
use Illuminate\View\View;
 
class MovieController extends Controller
{
    public function collection()
    {
        $pagesize = 8;
        $data = Movie::paginate($pagesize);

        return $data->toArray();
    }

    public function detail(string $id)
    {
        $data = Movie::find($id);

        dd($data);
    }

    public function create()
    {
        dd('Create Movie');
    }
}