// navigation/AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import ManageUsersScreen from './ManageUsersScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ManageUsers" component={ManageUsersScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
