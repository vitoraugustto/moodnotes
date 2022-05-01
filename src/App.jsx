import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import GettingStartedScreen from './screens/GettingStarted/GettingStartedScreen';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
