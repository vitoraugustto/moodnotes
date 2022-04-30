import React from 'react';
import { Image, Dimensions, Text, ScrollView } from 'react-native';

import { SafeArea, Box, Margin, Input, Padding } from './components';

import SeatedMan from './assets/images/seated-man.png';
import { COLOR_BLUE_700 } from './themes/theme';

const width = Dimensions.get('window').width;

const App = () => {
  return (
    <SafeArea>
      <ScrollView>
        <Box flex>
          <Padding all={16}>
            <Image
              resizeMode="contain"
              style={{ height: 400 }}
              source={SeatedMan}
            />
            <Text
              style={{
                color: COLOR_BLUE_700,
                fontFamily: 'Akshar-SemiBold',
                fontSize: 24,
              }}>
              Seu aplicativo para registrar seu dia a dia.
            </Text>

            <Text
              style={{
                color: COLOR_BLUE_700,
                fontFamily: 'Akshar-Regular',
                fontSize: 16,
              }}>
              Para começar, entre ou realize seu cadastro.
            </Text>
            <Margin top={16} />
            <Margin top={16} />
          </Padding>
        </Box>
      </ScrollView>
    </SafeArea>
  );
};

export default App;
