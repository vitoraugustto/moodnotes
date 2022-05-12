import { API_INSTANCE } from './axios';

import store from '../store';

const authToken = () => {
  return { Authorization: `Bearer ${store.getState().user.token}` };
};

export const fetchNotes = () => {
  return API_INSTANCE({
    method: 'GET',
    url: `/moods`,
    headers: authToken(),
  });
};

export const createNote = ({ mood, title, description }) => {
  return API_INSTANCE({
    method: 'POST',
    url: `/moods`,
    headers: authToken(),
    data: {
      mood: mood,
      title: title,
      description: description,
    },
  });
};
