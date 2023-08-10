# Cinema Booking App with Frontend React Native + Backend Laravel

1. Import the cinema_app.sql in phpmyadmin. This sql file contains dummy data for cinemas, seats, and movie shows. Besides that,
   the movie data is obtained from TMDB API ('https://developer.themoviedb.org/reference/intro/getting-started').
2. Start the XAMPP.
3. Adjust your own ip address in file src>views>TicketBookingView.tsx (line 74);
4. Run api backend: php artisan serve --host=YOUR_IP_ADDRESS --port=8000.
5. Run front end application: npx react-native start --reset-cache.

Notes:

There are still room to improve, here is some list bugs:

1. Pusher event has not been received, even though there is updated data from the database.
2. To many render in TicketBookingView.
3. Data beverage and food is still static data.
4. Other bugs that may not have been found.

I have tried to answer most of the questions asked. I may not have 100% correct answer. in my opinion, IT is evolved and I believe it is important that we keep learning the new technology. I am open and fast learner.
