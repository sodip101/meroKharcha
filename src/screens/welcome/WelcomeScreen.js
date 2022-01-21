import React from 'react';
import {View, ImageBackground} from 'react-native';

import {Images, CommonStyles} from '../../constants';

function WelcomeScreen() {
  return (
    <ImageBackground
      source={Images.authScreenBackground}
      style={CommonStyles.flexRoot}>
      <View />
    </ImageBackground>
  );
}

export default WelcomeScreen;
