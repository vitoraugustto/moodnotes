import React from 'react';
import { TextInput } from 'react-native';

import { COLOR_VIOLET_400, COLOR_VIOLET_700 } from '../../themes/theme';

const Input = ({
  mask,
  bgColor = COLOR_VIOLET_400,
  placeholder,
  placeholderColor = COLOR_VIOLET_700,
  borderRadius = 8,
  value,
  onChangeText,
  color = COLOR_VIOLET_700,
  multiline,
  style,
  children,
}) => {
  return (
    <TextInput
      secureTextEntry={mask}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      onChangeText={onChangeText}
      value={value}
      multiline={multiline}
      style={{
        alignSelf: 'stretch',
        color: color,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        ...style,
      }}>
      {children}
    </TextInput>
  );
};

export default Input;
