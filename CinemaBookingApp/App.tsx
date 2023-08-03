import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './src/routes/BottomNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingStack from './src/routes/BookingStack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{animation: 'default', headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingStack}
          options={{animation: 'default', headerShown: false}}
          // options={{
          //   animation: 'none',
          //   headerTitle: '',
          //   headerTransparent: true,
          //   headerTintColor: COLOR.White,
          // }}
        />
        {/* <Stack.Screen
          name="TicketBooking"
          component={TicketBookingView}
          options={{animation: 'none'}}
        />
        <Stack.Screen
          name="OrderCompleted"
          component={OrderCompletedView}
          options={{animation: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="CardPayment"
          component={CardPaymentView}
          options={{animation: 'none'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {},
// });
