import React from 'react';
import {StyleSheet} from 'react-native';

import {Button} from 'react-native-elements';

import {Colors} from '../../constants';

function CustomButton({
  title,
  onPress,
  disabled,
  loading,
  customButtonStyle,
  customTitleStyle,
  ...rest
}) {
  return (
    <Button
      title={title}
      onPress={onPress}
      disabled={disabled}
      loading={loading}
      buttonStyle={StyleSheet.flatten([STYLES.button, customButtonStyle])}
      titleStyle={StyleSheet.flatten([STYLES.title, customTitleStyle])}
      {...rest}
    />
  );
}

const STYLES = StyleSheet.create({
  button: {
    borderRadius: 42,
    height: 50,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 16,
  },
});

export default CustomButton;
