import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from '../../services/user';
import { setUser } from '../../store/actions/user';

import {
  SafeArea,
  Margin,
  Padding,
  Button,
  MyText,
  Input,
  Image,
} from '../../components';

import { windowHeight } from '../../utils';

import SeatedMan from '../../assets/images/seated-man.png';
import { COLOR_BLUE_700, FONTS } from '../../themes/theme';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('aline@email.com');
  const [password, setPassword] = useState('Re3we322s');
  const [loading, setLoading] = useState('');

  const handleOnPress = () => {
    if (loading) return;
    setLoading(true);
    login({ user: username, password: password })
      .then(res => {
        dispatch(setUser(res.data, res.data.token));
      })
      .catch(err => {
        Alert.alert(null, 'Usuário ou senha incorreta');
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeArea>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Padding all={16}>
          <Image
            resizeMode="contain"
            height={windowHeight * 0.6}
            src={SeatedMan}
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
