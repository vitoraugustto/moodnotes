import GettingStartedScreen from '../screens/GettingStarted/GettingStartedScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';

import { defaultOptions } from '.';

export const START_ROUTES = {
  GettingStartedScreen: {
    component: GettingStartedScreen,
    options: defaultOptions,
  },
  LoginScreen: {
    component: LoginScreen,
    options: defaultOptions,
  },
  RegisterScreen: {
    component: RegisterScreen,
    options: defaultOptions,
  },
};
