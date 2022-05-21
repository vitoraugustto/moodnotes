import React, { useCallback, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { fetchNotes } from '../../../services/note';

import {
  Box,
  Icon,
  Margin,
  MyText,
  Padding,
  SafeArea,
} from '../../../components';

import { COLOR_BLUE_400, FONTS, COLOR_WHITE } from '../../../themes/theme';
import Note from '../../../components/Note/Note';

const ListNotesScreen = () => {
  const navigation = useNavigation();

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchNotes = () => {
    setLoading(true);
    fetchNotes()
      .then(res => setNotes(res.data.reverse()))
      .catch(() =>
        Alert.alert(
          null,
          'Erro ao carregar suas notas. Por favor, tente novamente mais tarde.',
        ),
      )
      .finally(() => setLoading(false));
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchNotes();
    }, []),
  );

  console.log(notes);

  return (
    <SafeArea bgColor={COLOR_BLUE_400}>
      <ScrollView>
        <Padding all={16}>
          <MyText font={FONTS.poppins.bold} color={COLOR_WHITE} size={24}>
            Suas notas
          </MyText>

          {notes.map((note, index) => (
            <Margin top={12} key={index}>
              <Note note={note} onPress={() => console.log(note)} />
            </Margin>
          ))}
        </Padding>
      </ScrollView>
    </SafeArea>
  );
};

export default ListNotesScreen;
