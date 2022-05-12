import { API_INSTANCE, authToken, GET, POST } from './axios';

export const fetchNotes = () => {
  return API_INSTANCE({
    method: GET,
    url: `/moods`,
    headers: authToken(),
  });
};

export const createNote = ({ mood, description }) => {
  return API_INSTANCE({
    method: POST,
    url: `/moods`,
    headers: authToken(),
    data: {
      mood: mood,
      description: description,
    },
  });
};
