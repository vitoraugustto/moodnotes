import React from 'react';
import { View } from 'react-native';

const Margin = ({
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
        marginTop: top || vertical || all,
        marginRight: right || horizontal || all,
        marginBottom: bottom || vertical || all,
        marginLeft: left || horizontal || all,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default Margin;
