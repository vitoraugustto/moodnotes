import { LOGOUT_USER, SET_USER } from '../actions/user';

const initialState = {
  __v: null,
  _id: null,
  age: null,
  createdAt: null,
  email: null,
  name: null,
  token: null,
  updatedAt: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, token: action.token, ...action.user };
    }

    case LOGOUT_USER: {
      return initialState;
    }

    default:
      return state;
  }
};
