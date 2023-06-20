<?php
 
namespace App\Http\Controllers;
 
use App\Models\Movie;
use App\Models\Account;
use App\Models\Booking;
use App\Models\AvailableSlot;
use App\Models\Location;
use App\Models\Subscriber;
use App\Models\State;
use Carbon\Carbon;
use Illuminate\View\View;
 
class MainController extends Controller
{
    public function MovieCollection()
    {
        $pagesize = 8;
        $data = Movie::paginate($pagesize);

        return $data->toArray();
    }

    public function SlotCollection()
    {
        $data = AvailableSlot::all();

        return $data->toArray();
    }

    public function AccountCollection()
    {
        $data = Account::all();

        return $data->toArray();
    }

    public function LocationCollection()
    {
        $data = Location::all();

        return $data->toArray();
    }

    public function StateCollection()
    {
        $data = State::all();

        return $data->toArray();
    }

    public function ViewSubscriber()
    {
        $request = request();
        return Subscriber::find($request->id);
    }

    public function ViewTicket()
    {
        $request = request();
        $movie = (Int)($request->movie);
        $response = (object)[
            'seat' => [],
            'date' => [],
        ];

        $orders = Booking::where(["movie_id" => $movie]);
        $orders = $orders->get();
        $orders = $orders->map(function($a){
            $a->pax = json_decode($a->pax);
            return $a;
        });

        return $orders->toArray();
    }

    public function AddSubscriber()
    {
        $request = request();
        $profile = ($request->profile ?? null);
        $movie   = ($request->movie ?? null);

        $checkExist = Subscriber::where([
            ['user_id', '=', $profile],
            ['movie_id', '=', $movie]
        ]);

        $checkExist->delete();

        return Subscriber::create([
            'user_id' => $profile,
            'movie_id' => $movie,
            'has_order' => 0
        ]);
    }

    public function SaveTicket()
    {
        $request     = request();
        $date        = ($request->date ?? null);
        $slot        = ($request->slot ?? null);
        $movie       = ($request->movie ?? null);
        $profile     = ($request->profile ?? null);
        $location    = ($request->location ?? null);
        $collectSeat = ($request->collectSeat ?? null);

        $totalpax  = count($collectSeat);
        $moviedata = Movie::find($movie);
        
        //# Insert Booking
        $result = Booking::create([
            'user_id' => $profile,
            'movie_id' => $movie,
            'slot_id' => $slot,
            'paid_amount' => ($moviedata->amount * $totalpax),
            'pax' => json_encode($collectSeat),
            'date' => $date,
            'location' => $location,
        ]);

        //# Tell Channel To Refresh Booking
        Subscriber::where('movie_id', '=', $movie)->update(['has_order' => 1]);

        return $result;
    }

    public function FillDataScript()
    {
        /* Insert Account Fake Data */
        for($i = 0; $i <= 20; $i++){
            Account::create([
                'name' => fake()->name(),
                'email' => preg_replace('/@example\..*/', '@gmail.com', fake()->unique()->safeEmail),
                'password' => 'admin1234',
            ]);
        }

        /* Insert Movie Fake Data */
        for($i = 0; $i <= 20; $i++){
            $moviefaker = \Faker\Factory::create();
            $moviefaker->addProvider(new \Xylis\FakerCinema\Provider\Movie($moviefaker));

            $castfaker = \Faker\Factory::create();
            $castfaker->addProvider(new \Xylis\FakerCinema\Provider\Person($castfaker));

            $movieName = $moviefaker->movie;
            $moviePicture = 'https://picsum.photos/seed/picsum/600/600';
            $movieDuration = $moviefaker->runtime;
            $movieCategory = $moviefaker->movieGenres(6);

            $movieDescription = "Studio: ".$moviefaker->movie."
            Duration: ".$moviefaker->runtime."
            Saga: ".$moviefaker->saga."
            Genre: ".$moviefaker->movieGenre."

            Actor: ".$castfaker->actor.", ".$castfaker->maleActor.", ".$castfaker->composer."
            Actress: ".$castfaker->femaleActor.", ".$castfaker->cinematographer.", ".$castfaker->femalePerson."
            Director: ".$castfaker->director."

            Overview:
            ".$moviefaker->overview."";

            $movieStart = ($moviefaker->date().' '.$moviefaker->time());
            $movieEnd = Carbon::parse($movieStart);
            $movieEnd->addHours($movieDuration);
            
            Movie::create([
                "name" => $movieName,
                "category" => json_encode($movieCategory),
                "description" => $movieDescription,
                "duration" => $movieDuration,
                "start_time" => $movieStart,
                "end_time" => $movieEnd,
                "picture" => $moviePicture,
                "is_active" => 1
            ]);
        }

        /* Insert Movie Slot Fake Data */
        AvailableSlot::create(['slot_time' => '9:20 AM']);
        AvailableSlot::create(['slot_time' => '11:40 AM']);
        AvailableSlot::create(['slot_time' => '1:20 PM']);
        AvailableSlot::create(['slot_time' => '3:30 PM']);
        AvailableSlot::create(['slot_time' => '5:40 PM']);
        AvailableSlot::create(['slot_time' => '7:30 PM']);
        AvailableSlot::create(['slot_time' => '9:20 PM']);

        /* Insert Movie Location Fake Data */
        $data = State::create(["name" => 'Kedah']);
        Location::create(["name" => 'GSC Aman Central', "state" => $data->id]);
        Location::create(["name" => 'GSC Aman Jaya Mall', "state" => $data->id]);
        Location::create(["name" => 'GSC Jitra Complex', "state" => $data->id]);
        Location::create(["name" => 'GSC Langkawi Parade', "state" => $data->id]);
        Location::create(["name" => 'GSC City Mall', "state" => $data->id]);

        $data = State::create(["name" => 'Sabah']);
        Location::create(["name" => '10 Star Cinema Bandar Tabin Jaya', "state" => $data->id]);
        Location::create(["name" => 'CITY CINEPLEX', "state" => $data->id]);
        Location::create(["name" => 'Eastern Cineplex', "state" => $data->id]);
        Location::create(["name" => 'GROWBALL CINEMAX', "state" => $data->id]);
        Location::create(["name" => 'GSC Suria Sabah', "state" => $data->id]);

        $data = State::create(["name" => 'Selangor']);
        Location::create(["name" => 'AMERIN CINEPLEX', "state" => $data->id]);
        Location::create(["name" => 'DADI Cinema DaMen Mall', "state" => $data->id]);
        Location::create(["name" => 'GSC 3 Damansara', "state" => $data->id]);
        Location::create(["name" => 'GSC CITTA Mall', "state" => $data->id]);
        Location::create(["name" => 'GSC IOI City Mall 2 (East)', "state" => $data->id]);
    }
}