import React from 'react';
import TicketView from '../views/history/HistoryTicketView';
import AccountView from '../views/account/AccountView';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteView from '../views/favorite/FavoriteView';
import MovieView from '../views/movie/MovieView';

const Tab = createBottomTabNavigator();
const IconTab = (focused: boolean, name: string) => {
  return (
    <View>
      <Icon
        name={name}
        color={focused ? 'white' : 'rgba(255,255,255,0.50)'}
        size={30}
      />
    </View>
  );
};
const LabelTab = (focused: boolean, name: String) => {
  return <Text style={focused ? style.show : style.none}>{name}</Text>;
};
const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          height: 56,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MovieView}
        options={{
          tabBarLabel(props) {
            return LabelTab(props.focused, 'Home');
          },
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => {
            return IconTab(focused, 'home');
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketView}
        options={{
          tabBarLabel(props) {
            return LabelTab(props.focused, 'Ticket');
          },
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => {
            return IconTab(focused, 'ticket');
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteView}
        options={{
          tabBarLabel(props) {
            return LabelTab(props.focused, 'Favorite');
          },
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => {
            return IconTab(focused, 'heart-o');
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountView}
        options={{
          tabBarLabel(props) {
            return LabelTab(props.focused, 'Account');
          },
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => {
            return IconTab(focused, 'user-o');
          },
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  none: {
    display: 'none',
    fontSize: 10,
    color: 'rgba(255,255,255,0.75)',
  },
  show: {
    display: 'flex',
    fontSize: 10,
    color: 'white',
  },
});

export default BottomNav;
