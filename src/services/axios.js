import axios from 'axios';
import { BACKEND_BASE_URL } from '../config/api';

export const API_INSTANCE = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
