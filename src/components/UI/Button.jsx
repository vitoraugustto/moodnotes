import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import MyText from '../Typography/MyText';
import {
  COLOR_BLUE_400,
  COLOR_GRAY_400,
  COLOR_GRAY_700,
  COLOR_WHITE,
  FONTS,
} from '../../themes/theme';

const Button = ({
  height,
  loading,
  text,
  borderRadius = 8,
  bgColor = COLOR_BLUE_400,
  color,
  clear,
  disabled,
  borderColor,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: clear
          ? 'transparent'
          : disabled
          ? COLOR_GRAY_400
          : bgColor,
        flexDirection: 'row',
        minHeight: 48,
        borderRadius: borderRadius,
        borderWidth: borderColor ? 3 : 0,
        borderColor: borderColor,
        height: height,

        transition: '0.5s',
        ...style,
      }}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={color ? color : clear ? COLOR_BLUE_400 : COLOR_WHITE}
        />
      ) : (
        <MyText
          spacing={1.5}
          font={FONTS.poppins.semibold}
          color={
            color
              ? color
              : clear
              ? COLOR_BLUE_400
              : disabled
              ? COLOR_GRAY_700
              : COLOR_WHITE
          }>
          {text}
        </MyText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
