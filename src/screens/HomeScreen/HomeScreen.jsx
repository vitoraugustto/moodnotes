import React from 'react';

import { Box, MyText, SafeArea } from '../../components';

const HomeScreen = () => {
  return (
    <SafeArea>
      <Box flex hCenter vCenter>
        <MyText size={32}>HomeScreen</MyText>
      </Box>
    </SafeArea>
  );
};

export default HomeScreen;
