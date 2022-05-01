import { API_INSTANCE } from './axios';

export const Login = ({ username, password }) => {
  return API_INSTANCE({
    method: 'POST',
    url: `/api/login`,
    data: {
      email: username,
      password: password,
    },
  });
};
