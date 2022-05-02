import React, { useState } from 'react';
import { Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { login } from '../../services/auth';

import {
  SafeArea,
  Margin,
  Padding,
  Button,
  MyText,
  Input,
} from '../../components';

import SeatedMan from '../../assets/images/seated-man.png';
import { windowHeight } from '../../utils';

import { COLOR_BLUE_700, FONTS } from '../../themes/theme';
import { useDispatch, useSelector } from 'react-redux';
import { storeToken } from '../../store/actions/user';

const LoginScreen = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [loading, setLoading] = useState('');

  const handleOnPress = () => {
    if (loading) return;
    setLoading(true);
    login({ username: username, password: password })
      .then(res => {
        dispatch(storeToken({ token: res.data.token }));
      })
      .catch(err => {
        Alert.alert(null, 'Usuário ou senha inválida');
        console.log(err.response.data);
      })
      .finally(() => setLoading(false));
  };

  console.log(store);

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
            // disabled={!username || !password}
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
