import axios from 'axios';

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
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
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
