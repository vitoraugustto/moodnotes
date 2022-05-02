import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import { userReducer } from './reducers/user';

// change later to new syntax:
//
// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

const rootReducers = combineReducers({
  user: userReducer,
});

export default createStore(rootReducers, applyMiddleware(thunk));
