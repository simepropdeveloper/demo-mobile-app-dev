import React from 'react';
import TicketView from '../views/TicketView';
import FavouriteView from '../views/FavouriteView';
import AccountView from '../views/account/AccountView';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR} from '../themes/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import MovieStack from './MovieStack';
// import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const IconTab = (focused: boolean, name: string) => {
  return (
    <View>
      <Icon
        name={name}
        color={focused ? COLOR.White : COLOR.WhiteRGBA32}
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
          backgroundColor: COLOR.Black,
          borderTopWidth: 0,
          height: 56,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MovieStack}
        options={{
          tabBarLabel(props) {
            return LabelTab(props.focused, 'Home');
          },
          tabBarLabelStyle: {
            color: COLOR.White,
          },
          tabBarIcon: ({focused}) => {
            return IconTab(focused, 'home');
          },
          headerShown: false,
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
            color: COLOR.White,
          },
          tabBarIcon: ({focused}) => {
            return IconTab(focused, 'ticket');
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteView}
        options={{
          tabBarLabel(props) {
            return LabelTab(props.focused, 'Favourite');
          },
          tabBarLabelStyle: {
            color: COLOR.White,
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
            color: COLOR.White,
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
    color: COLOR.WhiteRGBA75,
  },
  show: {
    display: 'flex',
    fontSize: 10,
    color: COLOR.White,
  },
});

export default BottomNav;
