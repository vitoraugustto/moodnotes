import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { BACKGROUND_COLOR, COLOR_BLUE_400 } from '../../themes/theme';

const SafeArea = ({
  barStyle = 'light',
  statusBarBgColor = COLOR_BLUE_400,
  bgColor = BACKGROUND_COLOR,
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
