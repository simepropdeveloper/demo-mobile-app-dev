import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import DashboardScreen from './src/screens/DashboardScreen';
import PropertyScreen from './src/screens/PropertyScreen';
import VisitorEntryScreen from './src/screens/VisitorEntryScreen';
import MyVisitorsScreen from './src/screens/MyVisitorsScreen';
import { Provider } from './src/context/PropertyContext';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Property"
        component={PropertyScreen}
        options={{
          headerBackground: () => (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ff842e', '#fa5320']} style={{ flex: 1 }} />
          ),
          headerTintColor: '#fff',
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name="Visitor Entry"
        component={VisitorEntryScreen}
        options={{
          headerBackground: () => (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ff842e', '#fa5320']} style={{ flex: 1 }} />
          ),
          headerTintColor: '#fff',
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name="Visitors"
        component={MyVisitorsScreen}
        options={{
          headerBackground: () => (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ff842e', '#fa5320']} style={{ flex: 1 }} />
          ),
          headerTintColor: '#fff',
          headerBackTitleVisible: false
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}
