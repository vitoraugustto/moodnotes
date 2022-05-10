import { API_INSTANCE } from './axios';

export const fetchNotes = () => {
  return API_INSTANCE({
    method: 'GET',
    url: `/moods`,
  });
};

export const createNote = ({ mood, title, description }) => {
  return API_INSTANCE({
    method: 'POST',
    url: `/moods`,
    data: {
      mood: mood,
      title: title,
      description: description,
    },
  });
};
