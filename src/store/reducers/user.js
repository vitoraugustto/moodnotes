import { SET_USER } from '../actions/user';

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, token: action.token, ...action.user };
    }
    default:
      return state;
  }
};
