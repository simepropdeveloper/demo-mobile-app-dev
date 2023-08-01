import * as React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNav from './src/routes/BottomNav';
import DetailMovieView from './src/views/DetailMovieView';
import TicketBookingView from './src/views/TicketBookingView';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{animation: 'default'}}
        />
        <Stack.Screen
          name="DetailMovie"
          component={DetailMovieView}
          options={{animation: 'none'}}
        />
        <Stack.Screen
          name="TicketBooking"
          component={TicketBookingView}
          options={{animation: 'none'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {},
// });
