import { API_INSTANCE, POST, authToken, GET } from './axios';

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

export const uploadAvatar = ({ uri }) => {
  const formData = new FormData();
  formData.append('avatar', uri);

  return API_INSTANCE({
    method: POST,
    url: `/users/me/avatar`,
    headers: { ...authToken(), 'Content-Type': 'multipart/form-data' },
    data: formData,
  });
};

export const fetchAvatar = ({ id }) => {
  return API_INSTANCE({
    method: GET,
    url: `/users/${id}/avatar`,
  });
};
