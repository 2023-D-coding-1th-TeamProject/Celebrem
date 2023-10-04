import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7일 후 만료
    path: '/', // 기본 경로 설정
    ...option,
  };

  return cookies.set(name, value, options);
};

export const loginDataCookie = loginData => {
  Object.entries(loginData).forEach(([key, value]) => {
    setCookie(key, value);
  });
};

/*
* 옵션 *
1. path - 쿠키 값을 저장하는 서버 경로
2. expires - 쿠키 만료 시간 지정 (Date 객체를 받는다.)
3. httpOnly - document.cookie를 이용해서 쿠키에 접속하는 것을 차단해 비정상적인 접근을 막는다
4. secure - http로 통신하는 경우에만 쿠키를 서버로 전송
*/

export const getCookie = name => {
  return cookies.get(name);
};

export const getAllCookie = () => {
  return cookies.getAll();
};

export const removeCookie = (name, option) => {
  const cookieValue = getCookie(name);
  if (cookieValue !== undefined) {
    return cookies.remove(name, { ...option });
  }
};

export const removeAllCookie = () => {
  const allCookieNames = cookies.getAll();
  Object.keys(allCookieNames).forEach(cookieName => {
    cookies.remove(cookieName);
  });
};
