import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { COLOR_VIOLET_300, COLOR_VIOLET_700 } from '../../themes/theme';

const SafeArea = ({
  barStyle = 'light',
  statusBarBgColor = COLOR_VIOLET_700,
  bgColor = COLOR_VIOLET_300,
  children,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
      <StatusBar
        barStyle={`${barStyle}-content`}
        backgroundColor={statusBarBgColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
