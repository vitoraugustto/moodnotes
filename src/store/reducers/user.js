import { STORE_TOKEN } from '../actions/user';

const initialState = {
  token: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_TOKEN: {
      return { ...state, token: action.token };
    }
    default:
      return state;
  }
};
