import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { createNote } from '../../../services/note';
import { MOODS } from '../../../utils';

import {
  Box,
  Button,
  Icon,
  Input,
  Margin,
  MyText,
  Padding,
  SafeArea,
} from '../../../components';

import {
  COLOR_HIGH_EMPHASIS,
  COLOR_MEDIUM_EMPHASIS,
  COLOR_BLUE_400,
  FONTS,
  COLOR_WHITE,
  BACKGROUND_COLOR,
} from '../../../themes/theme';

const CreateNoteDescribeScreen = ({ route }) => {
  const { selectedMood, selectedFoods } = route.params || {};
  const navigation = useNavigation();

  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateNote = () => {
    if (loading) return;
    setLoading(true);

    createNote({
      mood: selectedMood,
      food: String(selectedFoods),
      description: description
        ? description
        : `Hoje eu me senti ${MOODS[selectedMood].text.toLowerCase()}.`,
    })
      .then(() => {
        navigation.navigate('HomeScreen');
      })
      .catch(() => {
        Alert.alert(
          null,
          'Erro ao criar nota. Por favor, tente novamente mais tarde.',
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeArea>
      <ScrollView>
        <Box bgColor={COLOR_BLUE_400}>
          <Padding horizontal={16}>
            <Padding vertical={32}>
              <Box hCenter>
                <Icon size={128} iconName={MOODS[selectedMood].emoji} />
                <Margin top={16} />
                <MyText
                  align="center"
                  size={24}
                  font={FONTS.poppins.bold}
                  color={COLOR_WHITE}>
                  {`Você está se sentindo\n${MOODS[
                    selectedMood
                  ].text.toLowerCase()}`}
                </MyText>
              </Box>
            </Padding>
          </Padding>
        </Box>
        <Box
          style={{ top: -15 }}
          bgColor={BACKGROUND_COLOR}
          borderRadius={16}
          flex>
          <Padding all={16}>
            <MyText
              size={18}
              color={COLOR_HIGH_EMPHASIS}
              font={FONTS.poppins.semibold}>
              Descreva seu sentimento
            </MyText>
            <MyText
              size={16}
              color={COLOR_MEDIUM_EMPHASIS}
              font={FONTS.lato.regular}>
              Caso não queira descrever, deixe o campo em branco.
            </MyText>
            <Margin top={16} />
            <Input
              multiline
              placeholder="Hoje me senti..."
              value={description}
              onChangeText={setDescription}
            />
          </Padding>
        </Box>
      </ScrollView>
      <Button
        onPress={handleCreateNote}
        height={56}
        loading={loading}
        borderRadius={0}
        text="Criar nota"
      />
    </SafeArea>
  );
};

export default CreateNoteDescribeScreen;
