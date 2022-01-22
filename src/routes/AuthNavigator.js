import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {WelcomeScreen, LoginScreen, SignUpScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Welcome" component={WelcomeScreen} />

      <Screen name="Login" component={LoginScreen} />

      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  );
}

export default AuthNavigator;
