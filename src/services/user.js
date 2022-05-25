import { API_INSTANCE, POST } from './axios';

export const login = ({ user, password }) => {
  return API_INSTANCE({
    method: POST,
    url: `/users/login`,
    data: {
      user: user,
      password: password,
    },
  });
};

export const createUser = ({ name, email, password, birthdate }) => {
  return API_INSTANCE({
    method: POST,
    url: `/users`,
    data: {
      name: name,
      email: email,
      password: password,
      birthday: birthdate,
      biological_sex: 'male',
    },
  });
};
