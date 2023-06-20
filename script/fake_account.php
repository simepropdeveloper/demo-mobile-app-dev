<?php
for($i = 0; $i <= 20; $i++){
    Account::create([
        'name' => fake()->name(),
        'email' => preg_replace('/@example\..*/', '@gmail.com', fake()->unique()->safeEmail),
        'password' => 'admin1234',
    ]);
}
?>