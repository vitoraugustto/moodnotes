import React from 'react';

import Box from '../Layout/Box';
import MyText from '../Typography/MyText';

import { COLOR_HIGH_EMPHASIS, COLOR_WHITE, FONTS } from '../../themes/theme';

const PlusButton = ({ onPress }) => {
  return (
    <Box
      onPress={onPress}
      bgColor={COLOR_WHITE}
      height={42}
      width={42}
      borderRadius={8}
      hCenter
      shadow
      vCenter>
      <MyText size={28} color={COLOR_HIGH_EMPHASIS} font={FONTS.lato.bold}>
        +
      </MyText>
    </Box>
  );
};

export default PlusButton;
