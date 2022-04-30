import React from 'react';
import { Text } from 'react-native';

import { SafeArea, Box, Row, Margin } from './components';

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
