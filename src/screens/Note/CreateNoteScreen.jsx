import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { createNote } from '../../services/note';

import { MOODS } from '../Home/HomeScreen';
import {
  Box,
  Button,
  Icon,
  Margin,
  MyText,
  Padding,
  Row,
  SafeArea,
} from '../../components';

import { FONTS } from '../../themes/theme';

const CreateNoteScreen = () => {
  const navigation = useNavigation();

  const [selectedMood, setSelectedMood] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectMood = mood => {
    setSelectedMood(mood);
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
      <Padding all={16}>
        <MyText font={FONTS.poppins.bold} size={24}>
          Criar nota
        </MyText>
        <Margin top={12} />

        <MyText font={FONTS.lato.bold} align="center">
          Como você está se sentindo hoje?
        </MyText>
        <Margin top={12} />
        <Row hCenter style={{ justifyContent: 'space-evenly' }}>
          {Object.entries(MOODS).map(([mood, { emoji, text }], index) => (
            <Box hCenter onPress={() => selectMood(mood)} key={index}>
              <Icon size={selectedMood === mood ? 60 : 32} iconName={emoji} />
              <Margin top={8} />
              <MyText font={FONTS.poppins.semibold}>{text}</MyText>
            </Box>
          ))}
        </Row>
        <Margin top={36} />

        <Button loading={loading} onPress={handleCreateNote} text="Criar" />
      </Padding>
    </SafeArea>
  );
};

export default CreateNoteScreen;
