import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { createNote } from '../../../services/note';
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

import { COLOR_WHITE, FONTS } from '../../../themes/theme';

const CreateNoteSelectMoodScreen = () => {
  const { user } = useSelector(state => state);
  const navigation = useNavigation();

  const [selectedMood, setSelectedMood] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelectMood = mood => {
    setSelectedMood(mood);
  };

  const handleDescribeScreen = () => {
    navigation.navigate('CreateNote__DescribeScreen', { mood: selectedMood });
  };

  const handleCreateNote = () => {
    if (loading) return;
    setLoading(true);

    createNote({ mood: selectedMood, description: `Eu estou ${selectedMood}` })
      .then(() => navigation.navigate('HomeScreen'))
      .catch(() =>
        Alert.alert(
          null,
          'Erro ao criar nota. Por favor, tente novamente mais tarde.',
        ),
      )
      .finally(() => setLoading(false));
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
            loading={loading}
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
      bgColor={highlight ? COLOR_WHITE : 'transparent'}
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

export default CreateNoteSelectMoodScreen;
