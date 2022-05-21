import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import 'moment/locale/pt-br';

import { logoutUser } from '../../store/actions/user';

import {
  Box,
  Button,
  Image,
  Margin,
  MyText,
  Padding,
  SafeArea,
} from '../../components';

import {
  COLOR_BLUE_200,
  COLOR_BLUE_400,
  COLOR_BLUE_700,
  COLOR_WHITE,
  FONTS,
} from '../../themes/theme';
import UserImage from '../../assets/images/user--white.png';

const ProfileScreen = () => {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <SafeArea bgColor={COLOR_BLUE_200}>
      <Box bgColor={COLOR_BLUE_400} hCenter>
        <Margin top={68} />
        <Image src={UserImage} height={200} width={200} />
        <Margin top={12} />
        <MyText
          size={24}
          align="center"
          font={FONTS.lato.bold}
          color={COLOR_WHITE}>
          {user.name}
        </MyText>
        <MyText
          size={20}
          align="center"
          font={FONTS.lato.regular}
          color={COLOR_WHITE}>
          {user.age} anos
        </MyText>
        <Margin top={28} />
      </Box>
      <Box
        style={{ position: 'relative', top: -15 }}
        bgColor={COLOR_BLUE_700}
        borderRadius={16}>
        <Padding all={16}>
          <MyText size={18} color={COLOR_WHITE}>
            Email cadastrado
          </MyText>
          <MyText size={22} font={FONTS.poppins.semibold} color={COLOR_WHITE}>
            {user.email}
          </MyText>
        </Padding>
        <Margin top={20} />
      </Box>
      <Box
        style={{ position: 'relative', top: -40 }}
        flex
        bgColor={COLOR_BLUE_200}
        borderRadius={16}>
        <Padding all={16}>
          <MyText size={18}>Data de criação de usuário:</MyText>
          <MyText size={22} font={FONTS.poppins.semibold}>
            {moment(user.createdAt).format('LL')}
          </MyText>
          <Margin top={20} />
        </Padding>
      </Box>
      <Padding all={16}>
        <Button text="Sair da conta" onPress={handleLogout} />
      </Padding>
    </SafeArea>
  );
};

export default ProfileScreen;
