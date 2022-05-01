import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { START_ROUTES } from './start';

const Stack = createNativeStackNavigator();
const isAuthenticated = false;

const Routes = () => {
  return (
    <Stack.Navigator>
      {Object.entries(isAuthenticated ? {} : { ...START_ROUTES }).map(
        ([routeName, route]) => (
          <Stack.Screen
            key={routeName}
            name={routeName}
            component={route.component}
            options={route.options}
          />
        ),
      )}
    </Stack.Navigator>
  );
};

export default Routes;
