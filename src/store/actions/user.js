export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const setUser =
  ({ user, token }) =>
  dispatch => {
    dispatch({
      type: SET_USER,
      user: user,
      token: token,
    });
  };

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
  });
};
