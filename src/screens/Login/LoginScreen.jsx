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
import { windowHeight, windowWidth } from '../../utils';

import { COLOR_BLUE_700, FONTS } from '../../themes/theme';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/actions/user';

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

const teste = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcxYjIyMGRmMGQ3Nzk4Y2IxNDhhNjYiLCJpYXQiOjE2NTE2MjI1MjF9.P5nwt2p2CzFCdb5CizdslVOx8fUeWh7QyKffmgbegIY',
  user: {
    __v: 50,
    _id: '6271b220df0d7798cb148a66',
    age: 0,
    createdAt: '2022-05-03T22:52:16.697Z',
    email: 'aline@email.com',
    name: 'Aline',
    updatedAt: '2022-05-04T00:02:01.040Z',
  },
};
