import React from 'react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate, Link } from 'react-router-dom';
import { LoginStyle, LoginForm, Signup } from './LoginPageStyle';
import LOGO from '../../assets/images/login-signup-logo-img.svg';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';
import { userLogin } from '../../apis/auth';
import { loginState } from '../../atoms/userAtom';

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPW, setUserPW] = useState('');
  const setLoggedIn = useSetRecoilState(loginState);

  const navigate = useNavigate();

  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };

  const handleUserPW = e => {
    setUserPW(e.target.value);
  };

  const handleLogin = async e => {
    e.preventDefault();
    const loginData = await userLogin(userEmail, userPW);
    console.log(loginData);
    const token = loginData.accessToken;
    if (token) {
      localStorage.setItem('token', token);
      setLoggedIn(true);
    }
    navigate('/');
  };

  return (
    <LoginStyle>
      <h1 className="a11y">Celebrem 로고</h1>
      <Link to="/">
        <img src={LOGO} alt="celebrem 로고" />
      </Link>
      <LoginForm onSubmit={handleLogin}>
        <Input
          id="inputEmail"
          label="이메일"
          type="email"
          placeHolder="이메일을 입력하세요"
          onChange={handleUserEmail}
        />
        <Input
          id="inputPW"
          label="비밀번호"
          type="password"
          placeHolder="비밀번호를 입력하세요"
          onChange={handleUserPW}
        />
        <Button size="lg" variant="yes" type="submit">
          로그인
        </Button>
      </LoginForm>
      <p>비밀번호 찾기</p>
      <Signup onClick={() => navigate('../signup')}>회원이 아니신가요? 회원가입</Signup>
    </LoginStyle>
  );
};

export default LoginPage;
