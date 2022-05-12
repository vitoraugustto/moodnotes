import axios from 'axios';
import { BACKEND_BASE_URL } from '../config/api';
import store from '../store';

export const authToken = () => {
  return { Authorization: `Bearer ${store.getState().user.token}` };
};

export const API_INSTANCE = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const POST = 'POST';
export const GET = 'GET';
