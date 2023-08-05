import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import DetailMovieView from '../views/movie/DetailMovieView';
import TicketBookingView from '../views/booking/TicketBookingView';
import CardPaymentView from '../views/payment/CardPaymentView';
import OrderCompletedView from '../views/status/OrderCompletedView';
import PaymentView from '../views/payment/PaymentView';
import BookingSummaryView from '../views/booking/BookingSummaryView';
import BeverageFoodView from '../views/booking/BeverageFoodView';

const BookingStack = ({route}: any) => {
  const MovieNav = createNativeStackNavigator();
  return (
    <MovieNav.Navigator screenOptions={{animation: 'none'}}>
      <MovieNav.Screen
        name="DetailMovie"
        initialParams={{movieid: route.params.movieid}}
        component={DetailMovieView}
        options={{
          animation: 'none',
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: '#ffff',
        }}
      />
      <MovieNav.Screen name="TicketBooking" component={TicketBookingView} />
      <MovieNav.Screen name="BeverageFood" component={BeverageFoodView} />
      <MovieNav.Screen name="BookingSummary" component={BookingSummaryView} />
      <MovieNav.Screen name="Payment" component={PaymentView} />
      <MovieNav.Screen name="CardPayment" component={CardPaymentView} />
      <MovieNav.Screen
        name="OrderCompleted"
        component={OrderCompletedView}
        options={{headerShown: false}}
      />
    </MovieNav.Navigator>
  );
};

export default BookingStack;
