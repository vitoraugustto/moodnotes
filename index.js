import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import App from './src/App';

import mobileAds from 'react-native-google-mobile-ads';

mobileAds().initialize();

AppRegistry.registerComponent(appName, () => App);
