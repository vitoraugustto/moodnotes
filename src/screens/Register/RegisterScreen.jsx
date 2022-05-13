import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { createUser } from '../../services/user';

import {
  SafeArea,
  Margin,
  Padding,
  Button,
  MyText,
  Input,
  Box,
} from '../../components';

import { COLOR_BLUE_700, FONTS } from '../../themes/theme';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const redirectToLogin = () => {
    navigation.navigate('LoginScreen', {
      routeEmail: email,
      routePassword: password,
    });
  };

  const handleRegister = () => {
    if (loading) return;
    setLoading(true);
    createUser({ name: name, email: email, password: password })
      .then(redirectToLogin)
      .catch(err => console.log(err.response.data))
      .finally(() => setLoading(false));
  };

  return (
    <SafeArea>
      <Box vCenter flex>
        <Padding all={16}>
          <MyText font={FONTS.poppins.bold} size={22}>
            Olá!
          </MyText>
          <MyText
            font={FONTS.poppins.semibold}
            color={COLOR_BLUE_700}
            size={16}>
            Cadastre-se para começar!
          </MyText>
          <Margin top={8} />
          <Input
            outline
            value={name}
            onChangeText={setName}
            placeholder="Digite seu nome..."
          />
          <Margin top={12} />
          <Input
            outline
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email..."
          />
          <Margin top={12} />
          <Input
            outline
            value={password}
            onChangeText={setPassword}
            mask
            placeholder="Digite sua senha..."
          />
          <Margin top={12} />
          <Button
            disabled={!name || !email || password.length < 7}
            onPress={handleRegister}
            loading={loading}
            text="Cadastrar"
          />
        </Padding>
      </Box>
    </SafeArea>
  );
};

export default RegisterScreen;
