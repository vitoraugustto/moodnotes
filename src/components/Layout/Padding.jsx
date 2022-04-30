import React from 'react';
import { View } from 'react-native';

const Padding = ({
  top,
  right,
  bottom,
  left,
  vertical,
  horizontal,
  all,
  style,
  children,
}) => {
  return (
    <View
      style={{
        paddingTop: top || vertical || all,
        paddingRight: right || horizontal || all,
        paddingBottom: bottom || vertical || all,
        paddingLeft: left || horizontal || all,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default Padding;
