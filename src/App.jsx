import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';

import { AD_UNIT_ID } from './utils';

import { BannerAdSize, GAMBannerAd } from 'react-native-google-mobile-ads';

import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GAMBannerAd
          unitId={AD_UNIT_ID}
          sizes={[BannerAdSize.ANCHORED_ADAPTIVE_BANNER]}
        />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
