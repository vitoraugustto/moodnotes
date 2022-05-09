import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../store/actions/user';

import { Box, Margin, MyText, Padding, Row, SafeArea } from '../../components';

import LogoutIcon from '../../assets/icons/logout--black.png';

import {
  COLOR_HIGH_EMPHASIS,
  COLOR_GRAY_100,
  COLOR_WHITE,
  FONTS,
  COLOR_MEDIUM_EMPHASIS,
} from '../../themes/theme';

const fakeNotes = [
  {
    mood: 'Triste',
    title: 'Hoje não é um dia bom',
    description:
      'Hoje não foi um dia tão bom, não sei dizer exatamente pq! Estou triste',
  },
  {
    mood: 'happy',
    title: 'Hoje é um dia bom',
    description:
      'Hoje foi um dia tão bom, não sei dizer exatamente pq! Estou feliz',
  },
];

const HomeScreen = () => {
  const { name } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
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
              <Image style={{ width: 42, height: 42 }} source={LogoutIcon} />
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
          <LatestNote
            handleOnPress={() => console.log('Nota recente!')}
            fakeNote={fakeNotes[0]}
          />
        </Padding>
      </ScrollView>
    </SafeArea>
  );
};

const LatestNote = ({ handleOnPress, fakeNote }) => {
  return (
    <Box
      onPress={handleOnPress}
      shadow
      borderRadius={16}
      bgColor={COLOR_GRAY_100}>
      <Padding all={12}>
        <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
          <MyText font={FONTS.poppins.bold} color={COLOR_HIGH_EMPHASIS}>
            {fakeNote.title}
          </MyText>

          <Box
            hCenter
            vCenter
            bgColor={COLOR_WHITE}
            borderRadius={10}
            width={30}
            height={30}>
            <MyText font={FONTS.poppins.bold}>:(</MyText>
          </Box>
        </Row>
        <Margin top={8} />
        <MyText color={COLOR_MEDIUM_EMPHASIS}>{fakeNote.description}</MyText>
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
