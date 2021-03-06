import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { MOODS } from '../../../utils';

import {
  Box,
  Button,
  Icon,
  Margin,
  MyText,
  Padding,
  Row,
  SafeArea,
} from '../../../components';

import { COLOR_BLUE_400, FONTS } from '../../../themes/theme';

const SelectMoodScreen = () => {
  const { user } = useSelector(state => state);
  const navigation = useNavigation();

  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelectMood = mood => {
    setSelectedMood(mood);
  };

  const handleDescribeScreen = () => {
    navigation.navigate('SelectFoodScreen', {
      selectedMood: selectedMood,
    });
  };

  return (
    <SafeArea>
      <Box vCenter flex>
        <Padding all={16}>
          <Margin top={12} />
          <MyText size={18} font={FONTS.lato.bold}>
            Como se sente hoje, {user.name}?
          </MyText>
          <Margin top={12} />
          <Row
            hCenter
            style={{
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
            }}>
            {Object.entries(MOODS).map(([mood, { emoji, text }], index) => (
              <EmojiButton
                key={index}
                mood={mood}
                iconName={emoji}
                text={text}
                onPress={() => handleSelectMood(mood)}
                highlight={selectedMood === mood}
              />
            ))}
          </Row>
        </Padding>
        {selectedMood ? (
          <Button
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
            height={56}
            borderRadius={0}
            onPress={handleDescribeScreen}
            text="Continuar"
          />
        ) : null}
      </Box>
    </SafeArea>
  );
};

const EmojiButton = ({ highlight, iconName, text, onPress }) => {
  return (
    <Box
      width="50%"
      bgColor={highlight ? COLOR_BLUE_400 : 'transparent'}
      borderRadius={16}
      hCenter
      onPress={onPress}>
      <Padding top={20} />
      <Icon size={80} iconName={iconName} />
      <Margin top={8} />
      <MyText spacing={1} font={FONTS.poppins.semibold}>
        {text}
      </MyText>
      <Padding top={8} />
    </Box>
  );
};

export default SelectMoodScreen;
