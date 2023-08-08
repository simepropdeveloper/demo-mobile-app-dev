import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './src/routes/BottomNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingStack from './src/routes/BookingStack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {},
// });
