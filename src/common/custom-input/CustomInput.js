import React from 'react';
import {StyleSheet} from 'react-native';

import {Input} from 'react-native-elements';
import {Controller} from 'react-hook-form';

import {Colors} from '../../constants';

function CustomInput({
  control,
  name,
  label,
  rules,
  placeholder,
  secureTextEntry,
  rightIconName,
  onRightIconPress,
  ...rest
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <Input
          label={label}
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
          onBlur={onBlur}
          errorMessage={error?.message}
          inputStyle={STYLES.inputStyle}
          inputContainerStyle={STYLES.inputContainerStyle}
          labelStyle={STYLES.labelStyle}
          containerStyle={STYLES.containerStyle}
          secureTextEntry={secureTextEntry}
          rightIcon={
            rightIconName
              ? {
                  type: 'ionicon',
                  name:
                    secureTextEntry === true
                      ? 'eye'
                      : secureTextEntry === false
                      ? 'eye-off'
                      : rightIconName,
                  onPress: onRightIconPress,
                  color: Colors.secondary,
                }
              : null
          }
          {...rest}
        />
      )}
    />
  );
}

const STYLES = StyleSheet.create({
  inputStyle: {
    color: Colors.secondary,
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
  },
  inputContainerStyle: {
    borderColor: Colors.primary,
    borderBottomWidth: 2,
  },
  labelStyle: {
    color: Colors.secondary,
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Manrope-Regular',
  },
  containerStyle: {
    marginBottom: 10,
  },
});

export default CustomInput;
