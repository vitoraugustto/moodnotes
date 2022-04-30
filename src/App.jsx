import React from 'react';

import { SafeArea, Box, Margin, Input, Padding } from './components';

const App = () => {
  return (
    <SafeArea>
      <Box flex vCenter>
        <Padding all={22}>
          <Input placeholder="Digite seu usuário..." />
          <Margin top={16} />
          <Input mask placeholder="Digite sua senha..." />
        </Padding>
      </Box>
    </SafeArea>
  );
};

export default App;
