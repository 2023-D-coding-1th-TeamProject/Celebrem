import { instance } from './axiosInstance';
import { authInstance } from './axiosInstance';

/* 로그인 */
export const userLogin = async (email, password) => {
  const response = await instance.post('/auth/login', {
    email: email,
    password: password,
  });
  return response.data;
};

/* 회원가입 */
export const userSignup = async (userName, password, nickname) => {
  const response = await instance.post('/auth/signup', {
    userName: userName,
    password: password,
    nickname: nickname,
  });
  return response.data;
};

/* 회원가입 닉네임 중복 검증 */
export const nicknameVerification = async nickname => {
  const response = await instance.post('/auth/signup/nickname-verification', {
    nickname: nickname,
  });
  return response.data;
};

/* 이메일 인증 코드 검증 */
export const emailVerification = async (email, code) => {
  const response = await instance.post('/auth/email-verification/verify', {
    email: email,
    code: code,
  });
  return response.data;
};

/* 이메일 인증번호 발송 */
export const emailVerificationSend = async email => {
  const response = await instance.post('/auth/email-verification/send', {
    email,
  });
  return response.data;
};

/* 리프레시 토큰으로 만료된 액세스 토큰 재발급 */
export const postRefreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await authInstance.post(`/auth/reissue`, {
    refreshToken: refreshToken,
  });
  return response.data;
};
