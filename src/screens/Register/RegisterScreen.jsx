import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import moment from 'moment';

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

import { maskDate } from '../../utils';
import { COLOR_BLUE_700, FONTS } from '../../themes/theme';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
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
    createUser({
      name: name,
      email: email,
      password: password,
      birthdate: moment(birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
    })
      .then(redirectToLogin)
      .catch(err =>
        Alert.alert(
          'Erro ao realizar cadastro',
          'Por favor, verifique suas informações ou tente novamente mais tarde.',
        ),
      )
      .finally(() => setLoading(false));
  };

  const handleSetBirthDate = text => {
    if (birthdate.length > 10) return;

    setBirthdate(text);
  };

  useEffect(() => {
    setBirthdate(maskDate(birthdate));
  }, [birthdate]);

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
            placeholder="Nome"
          />
          <Margin top={12} />
          <Input
            outline
            value={birthdate}
            onChangeText={handleSetBirthDate}
            placeholder="Data de nascimento"
          />
          <Margin top={12} />
          <Input
            outline
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <Margin top={12} />
          <Input
            outline
            value={password}
            onChangeText={setPassword}
            mask
            placeholder="Senha"
          />
          <Margin top={12} />
          <Button
            disabled={
              name.length < 3 ||
              birthdate.length < 10 ||
              !email ||
              password.length < 7
            }
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
