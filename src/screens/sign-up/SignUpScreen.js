import React, {useState} from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';

import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/core';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {CustomInput, CustomButton} from '../../common';
import {Images, CommonStyles, Colors} from '../../constants';

function SignUpScreen() {
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  const [isSecureTextEntry, setSecureTextEntry] = useState(true);
  const handleSecureTextEntry = () => setSecureTextEntry(!isSecureTextEntry);

  return (
    <ImageBackground
      source={Images.authScreenBackground}
      style={CommonStyles.flexRoot}>
      <KeyboardAwareScrollView contentContainerStyle={STYLES.mainContainer}>
        <View
          style={StyleSheet.flatten([
            CommonStyles.paddingHorizontal24,
            {paddingBottom: 40},
          ])}>
          <Text style={STYLES.logoText}>meroKharcha</Text>
        </View>

        <View style={STYLES.formContainer}>
          <CustomInput
            control={control}
            name="fullName"
            label="Full Name"
            placeholder="e.g. Ram Bahadur"
            rules={{required: '*Required'}}
            leftIcon={{
              type: 'font-awesome',
              name: 'user',
              color: Colors.secondary,
            }}
          />

          <CustomInput
            control={control}
            name="email"
            label="Email"
            placeholder="e.g. ram_bahadur@gmail.com"
            rules={{required: '*Required'}}
            leftIcon={{
              type: 'feather',
              name: 'mail',
              color: Colors.secondary,
            }}
          />

          <CustomInput
            control={control}
            name="username"
            label="Username"
            placeholder="e.g.ram_bahadur"
            rules={{required: '*Required'}}
            leftIcon={{
              type: 'material-icon',
              name: 'alternate-email',
              color: Colors.secondary,
            }}
          />

          <CustomInput
            control={control}
            name="password"
            label="Password"
            placeholder="Password"
            rules={{required: '*Required'}}
            leftIcon={{
              type: 'font-awesome',
              name: 'key',
              color: Colors.secondary,
            }}
            secureTextEntry={isSecureTextEntry}
            rightIconName="eye"
            onRightIconPress={handleSecureTextEntry}
          />

          <CustomButton
            title="Sign Up"
            onPress={handleSubmit(data => console.log(data))}
            customButtonStyle={STYLES.buttonStyle}
            customTitleStyle={STYLES.buttonTitle}
          />
        </View>

        <View style={STYLES.bottomTextContainer}>
          <Text style={STYLES.bottomTextLeft}>Already have an account ?</Text>

          <Text
            style={STYLES.bottomTextRight}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}

const STYLES = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flexGrow: 1,
    paddingVertical: 30,
  },
  logoText: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Manrope-SemiBold',
    color: Colors.secondary,
  },
  formContainer: {
    paddingHorizontal: 50,
  },
  buttonStyle: {
    backgroundColor: Colors.secondary,
  },
  buttonTitle: {
    color: Colors.primary,
  },
  bottomTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 24,
  },
  bottomTextLeft: {
    color: Colors.secondary,
    fontSize: 16,
    fontFamily: 'Manrope-Medium',
    paddingRight: 7,
  },
  bottomTextRight: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: 'Manrope-Medium',
  },
});

export default SignUpScreen;
