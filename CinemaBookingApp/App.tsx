import * as React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './src/routes/BottomNav';
const App = () => {
  return (
    <NavigationContainer>
      <BottomNav />
      {/* <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{animation: 'default', headerShown: false}}
        />
        <Stack.Screen
          name="DetailMovie"
          component={DetailMovieView}
          options={{
            animation: 'none',
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: COLOR.White,
          }}
        />
        <Stack.Screen
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
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {},
// });
