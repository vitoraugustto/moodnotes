import React, { useCallback, useState } from 'react';
import { ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { fetchNotes } from '../../services/note';
import { logoutUser } from '../../store/actions/user';
import { FOODS, MOODS } from '../../utils';

import {
  Box,
  Icon,
  Margin,
  MyText,
  Padding,
  Row,
  SafeArea,
} from '../../components';

import {
  COLOR_HIGH_EMPHASIS,
  COLOR_BLUE_400,
  COLOR_WHITE,
  COLOR_MEDIUM_EMPHASIS,
  FONTS,
  COLOR_VIOLET_300,
  COLOR_VIOLET_700,
} from '../../themes/theme';
import Note from '../../components/Note/Note';

const HomeScreen = () => {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [latestNote, setLatestNote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleSelectMoodScreen = () => {
    navigation.navigate('SelectMoodScreen');
  };

  const handleFetchNotes = () => {
    setLoading(true);
    fetchNotes()
      .then(res => setLatestNote(res.data[res.data.length - 1]))
      .catch(() =>
        Alert.alert(
          null,
          'Erro ao carregar nota recente. Por favor, tente novamente mais tarde.',
        ),
      )
      .finally(() => setLoading(false));
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchNotes();
    }, []),
  );

  return (
    <SafeArea>
      <Box bgColor={COLOR_BLUE_400}>
        <Padding all={16}>
          <Row vCenter style={{ justifyContent: 'space-between' }}>
            <MyText
              flex
              font={FONTS.poppins.bold}
              color={COLOR_WHITE}
              size={24}>
              Olá, {user.name}!
            </MyText>

            <Box onPress={handleLogout}>
              <Icon size={42} iconName="logout--black" />
            </Box>
          </Row>
        </Padding>
        <Margin top={12} />
      </Box>
      <Box
        bgColor="#f5f5f5"
        flex
        style={{ position: 'relative', top: -15 }}
        borderRadius={16}>
        <Padding top={16} horizontal={16}>
          <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
            <MyText
              font={FONTS.poppins.bold}
              color={COLOR_HIGH_EMPHASIS}
              size={20}>
              Notas de humor
            </MyText>
            <PlusButton onPress={handleSelectMoodScreen} />
          </Row>

          {loading ? (
            <ActivityIndicator size="large" color={COLOR_BLUE_400} />
          ) : latestNote ? (
            <>
              <MyText
                font={FONTS.poppins.regular}
                color={COLOR_MEDIUM_EMPHASIS}
                size={12}>
                Sua nota mais recente
              </MyText>
              <Note onPress={() => console.log(latestNote)} note={latestNote} />
            </>
          ) : (
            <MyText
              font={FONTS.poppins.regular}
              color={COLOR_MEDIUM_EMPHASIS}
              size={12}>
              Você não tem nenhuma nota recente.
            </MyText>
          )}
        </Padding>
      </Box>
    </SafeArea>
  );
};

const PlusButton = ({ onPress }) => {
  return (
    <Box
      onPress={onPress}
      bgColor={COLOR_WHITE}
      height={42}
      width={42}
      borderRadius={8}
      hCenter
      vCenter>
      <MyText
        size={28}
        color={COLOR_HIGH_EMPHASIS}
        font={FONTS.poppins.regular}>
        +
      </MyText>
    </Box>
  );
};

export default HomeScreen;
