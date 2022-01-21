import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthNavigator} from './routes';

function MeroKharcha() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default MeroKharcha;
