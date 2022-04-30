import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Box = ({
  flex,
  bgColor,
  hCenter,
  vCenter,
  borderRadius,
  borderColor,
  onPress,
  style,
  height,
  width,
  children,
}) => {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      onPress={onPress}
      style={{
        flex: flex ? 1 : undefined,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: borderColor ? 1 : undefined,
        alignItems: hCenter ? 'center' : 'flex-start',
        justifyContent: vCenter ? 'center' : 'flex-start',
        height: height,
        width: width,
        ...style,
      }}>
      {children}
    </Container>
  );
};

export default Box;
