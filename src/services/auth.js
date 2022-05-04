import { API_INSTANCE } from './axios';

export const login = ({ user, password }) => {
  return API_INSTANCE({
    method: 'POST',
    url: `/users/login`,
    data: {
      user: user,
      password: password,
    },
  });
};
