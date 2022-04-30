import React from 'react';
import { View } from 'react-native';

const Row = ({ flex, hCenter, vCenter, style, children }) => {
  return (
    <View
      style={{
        flex: flex ? 1 : undefined,
        flexDirection: 'row',
        justifyContent: hCenter ? 'center' : undefined,
        alignItems: vCenter ? 'center' : undefined,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default Row;
