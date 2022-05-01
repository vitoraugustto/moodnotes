import axios from 'axios';

const JSON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const API_INSTANCE = axios.create({
  baseURL: `https://reqres.in`,
  headers: JSON_HEADERS,
});
