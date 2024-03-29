import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import 'moment/locale/pt-br';
import { launchImageLibrary } from 'react-native-image-picker';

import { logoutUser } from '../../store/actions/user';
import { fetchAvatar, uploadAvatar } from '../../services/user';

import {
  Box,
  Button,
  Image,
  Margin,
  MyText,
  Padding,
  SafeArea,
} from '../../components';

import UserImage from '../../assets/images/user--white.png';

import {
  COLOR_BLUE_200,
  COLOR_BLUE_400,
  COLOR_BLUE_700,
  COLOR_WHITE,
  FONTS,
} from '../../themes/theme';

const ProfileScreen = () => {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleImagePicker = async () => {
    const data = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 1280,
      maxHeight: 720,
    });

    uploadAvatar({ uri: data.assets[0] })
      .then(res => console.log(res.data))
      .catch(err => console.log('ERROR: ', err.response));
  };

  const handleFetchAvatar = () => {
    fetchAvatar({ id: user._id }).then(res => {
      const fileReaderInstance = new FileReader();
      fileReaderInstance.readAsDataURL(res.data);
      fileReaderInstance.onload = () => {
        setAvatar(fileReaderInstance.result);
      };
    });
  };

  useEffect(() => {
    handleFetchAvatar();
  });

  return (
    <SafeArea bgColor={COLOR_BLUE_200}>
      <Box bgColor={COLOR_BLUE_400} hCenter>
        <Margin top={68} />
        <Box onPress={!avatar ? handleImagePicker : null}>
          <Image
            style={{ borderRadius: 100 }}
            src={avatar ? { uri: avatar } : UserImage}
            height={200}
            width={200}
          />
        </Box>
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
