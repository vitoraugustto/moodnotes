import React from 'react';
import { TextInput } from 'react-native';

import { COLOR_BLUE_200, COLOR_BLUE_700, FONTS } from '../../themes/theme';

const Input = ({
  mask,
  outline,
  bgColor = COLOR_BLUE_200,
  placeholder,
  placeholderColor = COLOR_BLUE_700,
  borderRadius = 8,
  value,
  onChangeText,
  color = COLOR_BLUE_700,
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
        fontSize: 14,
        fontFamily: FONTS.lato.regular,
        letterSpacing: 0.4,
        color: color,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: outline ? 'transparent' : bgColor,
        borderRadius: borderRadius,
        borderWidth: outline ? 3 : 0,
        borderColor: outline ? COLOR_BLUE_200 : 'transparent',
        ...style,
      }}>
      {children}
    </TextInput>
  );
};

export default Input;
