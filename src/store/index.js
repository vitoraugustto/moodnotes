import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import thunk from 'redux-thunk';

import { userReducer } from './reducers/user';

// change later to new syntax:
//
// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducers = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
