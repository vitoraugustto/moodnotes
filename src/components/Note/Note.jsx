import React from 'react';
import { ScrollView } from 'react-native';

import MyText from '../Typography/MyText';
import Padding from '../Layout/Padding';
import Margin from '../Layout/Margin';
import Icon from '../UI/Icon/Icon';
import Box from '../Layout/Box';
import Row from '../Layout/Row';

import moment from 'moment';
import 'moment/locale/pt-br';

import { FOODS, MOODS } from '../../utils';

import {
  COLOR_HIGH_EMPHASIS,
  COLOR_MEDIUM_EMPHASIS,
  COLOR_VIOLET_300,
  COLOR_VIOLET_700,
  COLOR_BLUE_400,
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
        <MyText color={COLOR_MEDIUM_EMPHASIS}>{note.description}</MyText>
        <ScrollView horizontal={true}>
          <Margin vertical={8}>
            <Row>
              {note.food.map((food, index) => (
                <Margin key={index} right={8}>
                  <Box borderRadius={16} bgColor={COLOR_VIOLET_300}>
                    <Padding horizontal={8} vertical={2}>
                      <MyText size={14} color={COLOR_VIOLET_700}>
                        {FOODS[food].text}
                      </MyText>
                    </Padding>
                  </Box>
                </Margin>
              ))}
            </Row>
          </Margin>
        </ScrollView>
        <MyText size={12} color={COLOR_BLUE_400}>{`Data de criação:\n${moment(
          note.createdAt,
        ).format('LLL')}`}</MyText>
      </Padding>
    </Box>
  );
};

export default Note;
