import React, { useCallback, useState } from 'react';
import { ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { fetchNotes } from '../../../services/note';

import {
  Margin,
  MyText,
  Note,
  Padding,
  PlusButton,
  Row,
  SafeArea,
} from '../../../components';

import { COLOR_BLUE_400, FONTS, COLOR_WHITE } from '../../../themes/theme';

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

  const handleSelectMoodScreen = () => {
    navigation.navigate('SelectMoodScreen');
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchNotes();
    }, []),
  );

  return (
    <SafeArea bgColor={COLOR_BLUE_400}>
      <ScrollView>
        <Padding all={16}>
          <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
            <MyText font={FONTS.poppins.bold} color={COLOR_WHITE} size={24}>
              Suas notas
            </MyText>
            <PlusButton onPress={handleSelectMoodScreen} />
          </Row>

          {loading ? (
            <Margin top={32}>
              <ActivityIndicator size="large" color={COLOR_WHITE} />
            </Margin>
          ) : notes.length > 0 ? (
            notes.map((note, index) => (
              <Margin top={12} key={index}>
                <Note note={note} />
              </Margin>
            ))
          ) : (
            <Margin top={32}>
              <MyText
                font={FONTS.poppins.regular}
                color={COLOR_WHITE}
                size={22}>
                Você não tem nenhuma nota criada.
              </MyText>
            </Margin>
          )}
        </Padding>
      </ScrollView>
    </SafeArea>
  );
};

export default ListNotesScreen;
