import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNotes } from '../../services/note';
import { logoutUser } from '../../store/actions/user';

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
  COLOR_GRAY_100,
  COLOR_WHITE,
  COLOR_MEDIUM_EMPHASIS,
  FONTS,
} from '../../themes/theme';

const HomeScreen = () => {
  const { name } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [latestNote, setLatestNote] = useState(null);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  console.log(useSelector(state => state));

  useEffect(() => {
    fetchNotes()
      .then(res => setLatestNote(res.data[res.data.length - 1]))
      .catch(err => console.log(err.response.data));
  }, []);

  return (
    <SafeArea>
      <ScrollView>
        <Padding all={16}>
          <Row vCenter style={{ justifyContent: 'space-between' }}>
            <MyText
              font={FONTS.poppins.bold}
              color={COLOR_HIGH_EMPHASIS}
              size={24}>
              Olá, {name}!
            </MyText>

            <Box onPress={handleLogout}>
              <Icon size={42} iconName="logout--black" />
            </Box>
          </Row>

          <MyText
            color={COLOR_MEDIUM_EMPHASIS}
            font={FONTS.lato.regular}
            size={20}>
            Como está se sentindo hoje?
          </MyText>
          <Margin top={48} />
          <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
            <MyText
              font={FONTS.poppins.bold}
              color={COLOR_HIGH_EMPHASIS}
              size={20}>
              Notas de humor
            </MyText>
            <PlusButton />
          </Row>
          <MyText
            font={FONTS.poppins.regular}
            color={COLOR_MEDIUM_EMPHASIS}
            size={12}>
            Sua nota mais recente
          </MyText>

          {latestNote ? (
            <LatestNote
              handleOnPress={() => console.log('Nota recente!')}
              latestNote={latestNote}
            />
          ) : null}
        </Padding>
      </ScrollView>
    </SafeArea>
  );
};

const MOODS = {
  sad: {
    text: 'Triste',
    emoji: 'sad-emoji',
  },
  happy: {
    text: 'Feliz',
    emoji: 'happy-emoji',
  },
  angry: {
    text: 'Raiva',
    emoji: 'angry-emoji',
  },
  surprised: {
    text: 'Surpreso',
    emoji: 'surprised-emoji',
  },
};

const LatestNote = ({ handleOnPress, latestNote }) => {
  return (
    <Box
      onPress={handleOnPress}
      shadow
      borderRadius={16}
      bgColor={COLOR_GRAY_100}>
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

const PlusButton = ({ handleOnPress }) => {
  return (
    <Box
      shadow
      onPress={handleOnPress}
      bgColor={COLOR_GRAY_100}
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
