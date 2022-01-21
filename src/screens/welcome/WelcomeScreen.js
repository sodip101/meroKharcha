import React from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';

import {CustomButton} from '../../common';
import {Images, CommonStyles, Colors} from '../../constants';

function WelcomeScreen() {
  return (
    <ImageBackground
      source={Images.authScreenBackground}
      style={StyleSheet.flatten([
        CommonStyles.flexRoot,
        {
          justifyContent: 'flex-end',
        },
      ])}
      resizeMethod="scale"
      resizeMode="stretch">
      <View
        style={StyleSheet.flatten([
          CommonStyles.paddingHorizontal24,
          {paddingVertical: 200},
        ])}>
        <Text style={STYLES.logoText}>meroKharcha</Text>
      </View>

      <View style={STYLES.buttonContainer}>
        <CustomButton
          title="Login"
          customButtonStyle={STYLES.loginButton}
          customTitleStyle={STYLES.loginButtonTitle}
        />

        <CustomButton title="Sign Up" />
      </View>
    </ImageBackground>
  );
}

const STYLES = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 59,
    paddingBottom: 123,
  },
  loginButton: {
    backgroundColor: Colors.secondary,
    marginBottom: 25,
  },
  loginButtonTitle: {
    color: Colors.primary,
  },
  logoText: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Manrope-SemiBold',
    color: Colors.secondary,
  },
});

export default WelcomeScreen;
