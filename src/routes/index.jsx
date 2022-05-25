import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { START_ROUTES } from './start';
import { TAB_ROUTE } from './tab';
import { NOTE_ROUTES } from './note';

import ListNotesScreen from '../screens/Note/ListNote/ListNotesScreen';
import HomeScreen from '../screens/Home/HomeScreen';

import ProfileScreen from '../screens/Profile/ProfileScreen';

import { Icon, Margin, MyText, Row } from '../components';

import {
  COLOR_BLACK,
  COLOR_BLUE_100,
  COLOR_BLUE_400,
  FONTS,
} from '../themes/theme';

export const defaultOptions = {
  headerShown: false,
};

const TAB_STYLES = {
  borderTopWidth: 1,
  borderTopColor: COLOR_BLUE_100,
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TABS = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home--',
  },
  {
    name: 'Notas',
    component: ListNotesScreen,
    icon: 'note--',
  },
  {
    name: 'Perfil',
    component: ProfileScreen,
    icon: 'user--',
  },
];

const TabIcon = ({ tab, focused }) => {
  return (
    <Row vCenter>
      <Icon
        size={24}
        iconName={focused ? tab.icon + 'blue' : tab.icon + 'black'}
      />
      <Margin right={8} />
      <MyText
        font={focused ? FONTS.lato.bold : FONTS.lato.regular}
        color={focused ? COLOR_BLUE_400 : COLOR_BLACK}>
        {tab.name}
      </MyText>
    </Row>
  );
};

export const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: TAB_STYLES,
      }}>
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon tab={tab} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Routes = () => {
  const token = useSelector(state => state.user.token);
  const isAuthenticated = token;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'none' }}>
        {Object.entries(
          isAuthenticated
            ? { ...TAB_ROUTE, ...NOTE_ROUTES }
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
    </NavigationContainer>
  );
};

export default Routes;
