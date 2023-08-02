import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeView from '../views/HomeView';
import DetailMovieView from '../views/DetailMovieView';
import TicketBookingView from '../views/TicketBookingView';
import CardPaymentView from '../views/payment/CardPaymentView';
import OrderCompletedView from '../views/OrderCompletedView';
import {COLOR} from '../themes/themes';
import PaymentView from '../views/payment/PaymentView';

const MovieStack = ({}) => {
  const MovieNav = createNativeStackNavigator();
  return (
    <MovieNav.Navigator screenOptions={{animation: 'none'}}>
      <MovieNav.Screen
        name="Movies"
        component={HomeView}
        options={{animation: 'none', headerShown: false}}
      />
      <MovieNav.Screen
        name="DetailMovie"
        component={DetailMovieView}
        options={{
          animation: 'none',
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: COLOR.White,
        }}
      />
      <MovieNav.Screen name="TicketBooking" component={TicketBookingView} />
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

export default MovieStack;
