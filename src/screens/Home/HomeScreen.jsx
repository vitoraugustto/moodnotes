import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { fetchNotes } from '../../services/note';
import { logoutUser } from '../../store/actions/user';

import {
  Box,
  Icon,
  Input,
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
} from '../../themes/theme';

const HomeScreen = () => {
  const { name } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [latestNote, setLatestNote] = useState(null);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleCreateNote = () => {
    navigation.navigate('CreateNoteScreen');
  };

  const handleFetchNotes = () => {
    fetchNotes()
      .then(res => setLatestNote(res.data[res.data.length - 1]))
      .catch(err => console.log(err.response.data));
  };

  useLayoutEffect(handleFetchNotes);

  return (
    <SafeArea bgColor="#f5f5f5">
      <Box bgColor={COLOR_BLUE_400}>
        <Padding all={16}>
          <Row vCenter style={{ justifyContent: 'space-between' }}>
            <MyText font={FONTS.poppins.bold} color={COLOR_WHITE} size={24}>
              Olá, {name}!
            </MyText>

            <Box onPress={handleLogout}>
              <Icon size={42} iconName="logout--black" />
            </Box>
          </Row>
          <MyText font={FONTS.lato.regular} size={20}>
            Como está se sentindo hoje?
          </MyText>
        </Padding>
        <Margin top={12} />
      </Box>
      <Box
        bgColor="#f5f5f5"
        flex
        style={{ position: 'relative', top: -15 }}
        borderRadius={16}>
        <ScrollView>
          <Padding top={16} horizontal={16}>
            <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
              <MyText
                font={FONTS.poppins.bold}
                color={COLOR_HIGH_EMPHASIS}
                size={20}>
                Notas de humor
              </MyText>
              <PlusButton onPress={handleCreateNote} />
            </Row>

            {latestNote ? (
              <>
                <MyText
                  font={FONTS.poppins.regular}
                  color={COLOR_MEDIUM_EMPHASIS}
                  size={12}>
                  Sua nota mais recente
                </MyText>
                <LatestNote
                  onPress={() => console.log('Nota recente!')}
                  latestNote={latestNote}
                />
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
        </ScrollView>
      </Box>
    </SafeArea>
  );
};

export const MOODS = {
  sad: {
    text: 'Triste',
    emoji: 'sad-emoji',
  },
  happy: {
    text: 'Feliz',
    emoji: 'happy-emoji',
  },
  angry: {
    text: 'Puto da vida',
    emoji: 'angry-emoji',
  },
  surprised: {
    text: 'Surpreso',
    emoji: 'surprised-emoji',
  },
};

const LatestNote = ({ onPress, latestNote }) => {
  return (
    <Box onPress={onPress} borderRadius={16} bgColor={COLOR_WHITE}>
      <Padding all={12}>
        <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
          <MyText font={FONTS.poppins.bold} color={COLOR_HIGH_EMPHASIS}>
            {MOODS[latestNote.mood].text}
          </MyText>
          <Box
            hCenter
            vCenter
            bgColor={COLOR_WHITE}
            borderRadius={10}
            width={30}
            height={30}>
            <Icon size={32} iconName={MOODS[latestNote.mood].emoji} />
          </Box>
        </Row>
        <Margin top={8} />
        <MyText color={COLOR_MEDIUM_EMPHASIS}>{latestNote.description}</MyText>
      </Padding>
    </Box>
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
