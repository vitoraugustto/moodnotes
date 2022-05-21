import React from 'react';

import MyText from '../Typography/MyText';
import Padding from '../Layout/Padding';
import Margin from '../Layout/Margin';
import Icon from '../UI/Icon/Icon';
import Box from '../Layout/Box';
import Row from '../Layout/Row';

import { FOODS, MOODS } from '../../utils';

import {
  COLOR_HIGH_EMPHASIS,
  COLOR_MEDIUM_EMPHASIS,
  COLOR_VIOLET_300,
  COLOR_VIOLET_700,
  COLOR_WHITE,
  FONTS,
} from '../../themes/theme';

const Note = ({ onPress, note }) => {
  return (
    <Box shadow onPress={onPress} borderRadius={16} bgColor={COLOR_WHITE}>
      <Padding all={12}>
        <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
          <MyText font={FONTS.poppins.bold} color={COLOR_HIGH_EMPHASIS}>
            {MOODS[note.mood].text}
          </MyText>
          <Box
            hCenter
            vCenter
            bgColor={COLOR_WHITE}
            borderRadius={10}
            width={30}
            height={30}>
            <Icon size={42} iconName={MOODS[note.mood].emoji} />
          </Box>
        </Row>
        <Margin top={4} />
        <Row style={{ flexWrap: 'wrap' }}>
          {note.food.map((food, index) => (
            <Margin key={index} bottom={8} right={8}>
              <Box borderRadius={16} bgColor={COLOR_VIOLET_300}>
                <Padding horizontal={8}>
                  <MyText size={14} color={COLOR_VIOLET_700}>
                    {FOODS[food].text}
                  </MyText>
                </Padding>
              </Box>
            </Margin>
          ))}
        </Row>
        <MyText color={COLOR_MEDIUM_EMPHASIS}>{note.description}</MyText>
      </Padding>
    </Box>
  );
};

export default Note;
