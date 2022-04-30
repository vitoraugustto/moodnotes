import React from 'react';
import { Text, View } from 'react-native';

import SafeArea from './components/Layout/SafeArea';
import Box from './components/Layout/Box';

const App = () => {
  const handleOnPress = () => {
    console.log('Pressed!');
  };

  return (
    <SafeArea>
      <View>
        <Box onPress={handleOnPress}>
          <Text style={{ color: 'black' }}>Teste</Text>
        </Box>
      </View>
    </SafeArea>
  );
};

export default App;
