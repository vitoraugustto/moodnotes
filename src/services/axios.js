import axios from 'axios';
import { BACKEND_BASE_URL } from '../config/api';

import store from '../store';

export const API_INSTANCE = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    Authorization: store.getState().user.token,
    'Content-Type': 'application/json',
  },
});
