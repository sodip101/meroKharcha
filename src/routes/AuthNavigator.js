import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {WelcomeScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Welcome" component={WelcomeScreen} />
    </Navigator>
  );
}

export default AuthNavigator;
