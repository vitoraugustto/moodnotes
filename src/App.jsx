import React from 'react';
import { Text, View } from 'react-native';

import SafeArea from './components/Layout/SafeArea';
import Box from './components/Layout/Box';
import Row from './components/Layout/Row';

const App = () => {
  const handleOnPress = () => {
    console.log('Pressed!');
  };

  return (
    <SafeArea>
      <Row>
        <Box bgColor="purple" onPress={handleOnPress}>
          <Text style={{ color: 'white', padding: 40 }}>Teste</Text>
        </Box>
        <Box bgColor="blue" onPress={handleOnPress}>
          <Text style={{ color: 'white', padding: 40 }}>Teste</Text>
        </Box>
      </Row>
    </SafeArea>
  );
};

export default App;
