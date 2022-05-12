import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { START_ROUTES } from './start';
import { MAIN_ROUTES } from './main';
import { NOTE_ROUTES } from './note';

export const defaultOptions = {
  headerShown: false,
};
const Stack = createNativeStackNavigator();

const Routes = () => {
  const token = useSelector(state => state.user.token);
  const isAuthenticated = token;

  return (
    <Stack.Navigator>
      {Object.entries(
        isAuthenticated
          ? { ...MAIN_ROUTES, ...NOTE_ROUTES }
          : { ...START_ROUTES },
      ).map(([routeName, route]) => (
        <Stack.Screen
          key={routeName}
          name={routeName}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Routes;
