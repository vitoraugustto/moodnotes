export const STORE_TOKEN = 'STORE_TOKEN';

export const storeToken =
  ({ token }) =>
  dispatch => {
    dispatch({
      type: STORE_TOKEN,
      token: token,
    });
  };
