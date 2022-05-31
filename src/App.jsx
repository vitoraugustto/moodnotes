import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';

import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
} from 'react-native-google-mobile-ads';

import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BannerAd
          sizes={[BannerAdSize.FULL_BANNER]}
          unitId="ca-app-pub-2882287196167600/7666393913"
        />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
