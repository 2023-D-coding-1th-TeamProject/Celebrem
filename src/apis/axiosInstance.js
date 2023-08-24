import axios from 'axios';
import { getCookie } from './cookie';

const URL = process.env.REACT_APP_API_URL;

export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(
  config => {
    const token = getCookie('token');
    if (!config.headers.Authorization) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  error => {
    console.log(error.message);
    return Promise.reject(error);
  },
);
