import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';

import { windowHeight } from './utils';
import { SafeArea, Box, Margin, Padding, Button, MyText } from './components';
import { COLOR_BLUE_700, COLOR_BLUE_400, FONTS } from './themes/theme';

import SeatedMan from './assets/images/seated-man.png';

const App = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOnPress = () => {};

  return (
    <SafeArea>
      <ScrollView>
        <Box>
          <Padding all={16}>
            <Image
              resizeMode="contain"
              style={{ height: windowHeight * 0.6 }}
              source={SeatedMan}
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
            <Button onPress={handleOnPress} text="Entrar" />
            <Margin top={12} />
            <Button
              clear
              borderColor={COLOR_BLUE_400}
              onPress={handleOnPress}
              text="Cadastrar"
            />
          </Padding>
        </Box>
      </ScrollView>
    </SafeArea>
  );
};

export default App;
