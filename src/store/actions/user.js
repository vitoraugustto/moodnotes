export const SET_USER = 'SET_USER';

export const setUser =
  ({ user, token }) =>
  dispatch => {
    dispatch({
      type: SET_USER,
      user: user,
      token: token,
    });
  };
