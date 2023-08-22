import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    LoginContainer,
    LogoImage,
    FormContainer,
    CloseIcon,
    InputField,
    FormLabel,
    LoginButton,
    TextParagraph,
  } from './LoginPageStyle';
import axios from 'axios';
import LOGO from '../../assets/images/login-signup-logo-img.svg';

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPW, setUserPW] = useState('');

  const navigate = useNavigate();

  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };

  const handleUserPW = e => {
    setUserPW(e.target.value);
  };

  return (
    <>
      <LoginContainer>
        <h1 className="a11y">Celebrem 로고</h1>
        <Link to="/">
          <LogoImage src={LOGO} alt="celebrem 로고" />
        </Link>
        <FormContainer>
          <FormLabel htmlFor="inputEmail">이메일</FormLabel>
          <div className={CloseIcon}>
            <InputField
              id="inputEmail"
              type="text"
              placeholder="이메일을 입력하세요"
              name="inputEmail"
              value={userEmail}
              onChange={handleUserEmail}
            />
          </div>
        </FormContainer>

        <FormContainer>
          <FormLabel htmlFor="inputPW">비밀번호</FormLabel>
          <InputField
            id="inputPW"
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="password"
            value={userPW}
            onChange={handleUserPW}
          />
        </FormContainer>
        <LoginButton
          id="loginbtn"
          onClick={() => {
            Token();
          }}
        >
          로그인
        </LoginButton>
        <br />
        <TextParagraph primary>비밀번호 찾기</TextParagraph>
        <TextParagraph bold underline onClick={() => navigate('../signup')}>
          회원이 아니신가요? 회원가입
        </TextParagraph>
      </LoginContainer>
    </>
  );

  function Token() {
    console.log('토큰 작업 실행');
    axios
      .post('http://http://144.24.82.156:8080/auth/login', {
        phonenumber: userEmail,
        password: userPW,
      })
      .then(function (response) {
        console.log(response);
        const token = response.data.accessToken;

        if (token) {
          //로컬 스토리지에 토큰 저장
          localStorage.setItem('login-token', token);
          console.log(token);
        }
        navigate('/');
      })
      .catch(function (error) {
        alert('로그인 실패😣');
      });
  }
};

export default LoginPage;
