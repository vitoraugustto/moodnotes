import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { Box, Margin, MyText, Padding, Row, SafeArea } from '../../components';

import {
  COLOR_HIGH_EMPHASIS,
  COLOR_BLUE_700,
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

  const handleOnPress = () => {
    console.log('Criar nova tarefa!');
  };
  return (
    <SafeArea>
      <ScrollView>
        <Padding all={16}>
          <MyText
            font={FONTS.poppins.bold}
            color={COLOR_HIGH_EMPHASIS}
            size={24}>
            Olá, {name}!
          </MyText>
          <MyText
            color={COLOR_MEDIUM_EMPHASIS}
            font={FONTS.lato.regular}
            size={20}>
            Como está se sentindo hoje?
          </MyText>
          <Margin top={24} />
          <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
            <MyText
              font={FONTS.poppins.bold}
              color={COLOR_HIGH_EMPHASIS}
              size={20}>
              Notas de humor
            </MyText>
            <PlusButton handleOnPress={handleOnPress} />
          </Row>
          <Margin top={12} />
          <Box
            onPress={() => console.log('Nota de humor')}
            shadow
            borderRadius={16}
            bgColor={COLOR_GRAY_100}>
            <Padding all={12}>
              <Row style={{ justifyContent: 'space-between' }} vCenter hCenter>
                <MyText font={FONTS.poppins.bold} color={COLOR_HIGH_EMPHASIS}>
                  {fakeNotes[0].title}
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
              <MyText color={COLOR_MEDIUM_EMPHASIS}>
                {fakeNotes[0].description}
              </MyText>
            </Padding>
          </Box>
        </Padding>
      </ScrollView>
    </SafeArea>
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
