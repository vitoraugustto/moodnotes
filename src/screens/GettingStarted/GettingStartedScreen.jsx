import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  SafeArea,
  Margin,
  Padding,
  Button,
  MyText,
  Image,
} from '../../components';

import { windowHeight } from '../../utils';
import { COLOR_BLUE_700, COLOR_BLUE_400, FONTS } from '../../themes/theme';

import SeatedMan from '../../assets/images/seated-man.png';

const GettingStartedScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <SafeArea>
      <ScrollView>
        <Padding all={16}>
          <Image
            resizeMode="contain"
            height={windowHeight * 0.6}
            src={SeatedMan}
          />
          <MyText font={FONTS.poppins.bold} size={22}>
            Seu aplicativo para registrar seu dia a dia.
          </MyText>
          <MyText
            font={FONTS.poppins.semibold}
            color={COLOR_BLUE_700}
            size={16}>
            Para começar, entre ou realize seu cadastro. :)
          </MyText>
          <Margin top={24} />
          <Button onPress={handleLogin} text="Entrar" />
          <Margin top={12} />
          <Button
            clear
            borderColor={COLOR_BLUE_400}
            onPress={handleRegister}
            text="Cadastrar"
          />
        </Padding>
      </ScrollView>
    </SafeArea>
  );
};

export default GettingStartedScreen;
