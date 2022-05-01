import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import MyText from '../Typography/MyText';
import { COLOR_BLUE_400, COLOR_WHITE, FONTS } from '../../themes/theme';

const Button = ({
  loading,
  text,
  borderRadius = 8,
  bgColor = COLOR_BLUE_400,
  color,
  clear,
  borderColor,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: clear ? 'transparent' : bgColor,
        flexDirection: 'row',
        minHeight: 48,
        borderRadius: borderRadius,
        borderWidth: borderColor ? 3 : 0,
        borderColor: borderColor,
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
          color={color ? color : clear ? COLOR_BLUE_400 : COLOR_WHITE}>
          {text}
        </MyText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
