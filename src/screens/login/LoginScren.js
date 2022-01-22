import React from 'react';
import {ImageBackground, View} from 'react-native';

import {Images, CommonStyles} from '../../constants';

function LoginScreen() {
  return (
    <ImageBackground
      source={Images.authScreenBackground}
      style={CommonStyles.flexRoot}>
      <View />
    </ImageBackground>
  );
}

export default LoginScreen;
