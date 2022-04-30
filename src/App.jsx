import React from 'react';
import { Text, View } from 'react-native';

import SafeArea from './components/Layout/SafeArea';
import Box from './components/Layout/Box';
import Row from './components/Layout/Row';
import Padding from './components/Layout/Padding';

const App = () => {
  const handleOnPress = () => {
    console.log('Pressed!');
  };

  return (
    <SafeArea>
      <Row>
        <Box bgColor="purple" onPress={handleOnPress}>
          <Padding all={10}>
            <Text style={{ color: 'white' }}>Teste</Text>
          </Padding>
        </Box>
      </Row>
    </SafeArea>
  );
};

export default App;
