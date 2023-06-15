<?php
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
        "is_active" => 1,
    ]);
}
?>