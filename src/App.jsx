import React from 'react';
import { Text, View } from 'react-native';

import SafeArea from './components/Layout/SafeArea';
import Box from './components/Layout/Box';
import Row from './components/Layout/Row';
import Padding from './components/Layout/Padding';
import Margin from './components/Layout/Margin';

const App = () => {
  const handleOnPress = () => {
    console.log('Pressed!');
  };

  return (
    <SafeArea>
      <Row>
        <Margin top={10}>
          <Box bgColor="purple" onPress={handleOnPress}>
            <Text style={{ color: 'white' }}>Teste</Text>
          </Box>
        </Margin>
      </Row>
    </SafeArea>
  );
};

export default App;
