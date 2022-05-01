import React from 'react';
import { Image, ScrollView } from 'react-native';

import {
  SafeArea,
  Margin,
  Padding,
  Button,
  MyText,
  Input,
} from '../../components';

import { windowHeight } from '../../utils';
import { COLOR_BLUE_700, COLOR_BLUE_400, FONTS } from '../../themes/theme';

import SeatedMan from '../../assets/images/seated-man.png';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeArea>
      <ScrollView>
        <Padding all={16}>
          <Image
            resizeMode="contain"
            style={{ height: windowHeight * 0.6 }}
            source={SeatedMan}
          />

          <MyText font={FONTS.poppins.bold} size={22}>
            Olá!
          </MyText>
          <MyText
            font={FONTS.poppins.semibold}
            color={COLOR_BLUE_700}
            size={16}>
            Que bom ter você por aqui. ;)
          </MyText>

          <Margin top={24} />
          <Input placeholder="Digite seu usuário" />
          <Margin top={12} />
          <Input mask placeholder="Senha" />
          <Margin top={12} />
          <Button onPress={handleOnPress} text="Entrar" />
        </Padding>
      </ScrollView>
    </SafeArea>
  );
};

export default LoginScreen;
