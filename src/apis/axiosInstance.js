import axios from 'axios';
import { getCookie, setCookie, removeCookie } from './cookie';
import { postRefreshToken } from './auth';

const URL = process.env.REACT_APP_API_URL;

export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const imgInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const authInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(
  config => {
    const accessToken = getCookie('accessToken');
    config.headers.Authorization = `Bearer ${accessToken}`; // 수정된 부분
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

authInstance.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const accessToken = getCookie('accessToken');
        const refreshToken = getCookie('refreshToken');
        const refreshResponse = await postRefreshToken(accessToken, refreshToken);
        console.log(refreshResponse);
        const newAccessToken = refreshResponse.accessToken;
        const newRefreshToken = refreshResponse.refreshToken;
        setCookie('accessToken', newAccessToken);
        setCookie('refreshToken', newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return await authInstance.request(originalRequest);
      } catch (error) {
        removeCookie('accessToken');
        removeCookie('refreshToken');
        alert('로그인이 만료되었습니다.');

        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default authInstance;
