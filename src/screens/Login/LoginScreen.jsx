import React, { useState } from 'react';
import { Image, ScrollView, Alert } from 'react-native';

import { Login } from '../../services/auth';

import {
  SafeArea,
  Margin,
  Padding,
  Button,
  MyText,
  Input,
} from '../../components';

import { windowHeight } from '../../utils';
import { COLOR_BLUE_700, FONTS } from '../../themes/theme';

import SeatedMan from '../../assets/images/seated-man.png';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const handleOnPress = () => {
    if (loading) return;

    setLoading(true);
    Login({ username: username, password: password })
      .then(res => {
        Alert.alert(null, 'Logado');
        console.log(res.data);
      })
      .catch(err => {
        Alert.alert(null, 'Usuário ou senha inválida');
        console.log(err.response.data);
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeArea>
      <ScrollView keyboardShouldPersistTaps="handled">
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
          <Input
            placeholder="Digite seu usuário"
            value={username}
            onChangeText={setUsername}
          />
          <Margin top={12} />
          <Input
            mask
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
          />
          <Margin top={12} />
          <Button
            disabled={!username || !password}
            loading={loading}
            onPress={handleOnPress}
            text="Entrar"
          />
        </Padding>
      </ScrollView>
    </SafeArea>
  );
};

export default LoginScreen;
