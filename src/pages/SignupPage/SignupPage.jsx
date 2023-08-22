import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  SignupContainer,
  LogoImage,
  FormContainer,
  InputContainer,
  InputField,
  PasswordContainer,
  PasswordInputField,
  CheckButton,
  SignupButton,
} from './SignupPageStyle'; 
import LOGO from '../../assets/images/login-signup-logo-img.svg';

function SignupPage() {
  //각각 값들의 usestate
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [pw, setPw] = useState('');
  const [checkpw, setCheckPw] = useState('');

  //각 값들의 조건 상태를 보이기 위한 usestate
  const [pwMessage, setPwMessage] = useState('');
  const [checkpwMessage, setCheckPwMessage] = useState('');

  //조건을 만족했는지 확인해주는 usestate
  //   const [ispw, setIsPw] = useState(false);
  //   const [ischeckpw, setIsCheckPw] = useState(false);

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onNicknameChange = e => {
    setNickname(e.target.value);
  };

  // 비밀번호 유효성 검사 함수
  const onPWChange = e => {
    const currentPW = e.target.value;
    setPw(currentPW);
    const PasswordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 비밀번호 조건식
    if (!PasswordReg.test(currentPW)) {
      setPwMessage('대문자, 소문자, 숫자, 특수문자를 모두 포함한 8자 이상');
      //   setIsPw(false);
    } // 비밀번호 조건식과 입력한 값이 일치하지 않은 경우
    else {
      setPwMessage('이 비밀번호를 사용할 수 있습니다.');
      //   setIsPw(true);
    } // 비밀번호 조건식과 입력한 값이 일치한 경우
  };

  // 비밀번호 확인 유효성 검사 부분
  const onCheckPWChange = e => {
    const currenCheckPW = e.target.value;
    setCheckPw(currenCheckPW);
    if (pw !== currenCheckPW) {
      setCheckPwMessage('비밀번호가 일치하지 않습니다.');
      //   setIsCheckPw(false);
    } else {
      setCheckPwMessage('비밀번호가 일치합니다.');
      //   setIsCheckPw(true);
    }
  };

  // 이메일 중복 확인 부분 [이메일 중복 확인 버튼]
  const onCheckEmail = e => {
    axios
      .post('http://144.24.82.156:8080/auth/email-verification/send', {
          email : email
      })
      .then(response => {
        console.log(response.data);
        //true or false
        /* if(response.data.???){
                alert('사용가능한 이메일입니다.');
            } */
      })
      .catch(() => {
        alert('아직 서버 연결 ㄴㄴ');
      });
  };

  // 닉네임 중복 확인 부분 [닉네임 중복 확인 버튼]
  const onCheckNickname = e => {
    axios
      .post('http://144.24.82.156:8080/auth/signup/nickname-verification', {
        nickname : nickname
      })
      .then(response => {
        //true or false
        /* if(response.data.???){
                alert('사용가능한 이메일입니다.');
            } */
      })
      .catch(() => {
        alert('아직 서버 연결 ㄴㄴ');
      });
  };

  const navigate = useNavigate();

  //회원가입 버튼 눌렀을 때
  const sendSignUpData = async () => {
    if (email === '') {
      alert('이메일을 작성해주세요');
      return;
    } else if (nickname === '') {
      alert('닉네임을 작성해주세요');
      return;
    } else if (pw !== checkpw) {
      console.error('Passwords do not match.');
      alert('⚠비밀번호 불일치');
    }

    //POST 회원가입//
    axios
      .post('/auth/signup', {
        userName : email,
        password : pw,
        nickname: nickname,
        phoneNumber : "010-0000-0000"
      })
      .then(response => {
        console.log('Server response:', response.data);
        alert('회원가입이 완료하였습니다.');
        navigate('/login');
      })
      .catch(() => {
        alert('회원가입 실패😖 아직 서버 연결 안됨');
      });
  };

  return (
      <>
        <SignupContainer>
          <p>
            <h1 className="a11y">Celebrem 로고</h1>
            <Link to="/">
              <LogoImage src={LOGO} alt="celebrem 로고" />
            </Link>
          </p>
          <FormContainer>
            <label htmlFor="email">이메일</label>
            <InputContainer>
              <InputField
                id="email"
                type="text"
                placeholder="이메일을 입력해주세요"
                name="name"
                value={email}
                onChange={onEmailChange}
              />
              <CheckButton onClick={onCheckEmail}>이메일 중복 확인</CheckButton>
            </InputContainer>
          </FormContainer>
  
          <FormContainer>
            <label htmlFor="nickname">닉네임</label>
            <InputContainer>
              <InputField
                id="nickname"
                type="text"
                placeholder="영문 16자나 숫자 또는 한글 6가 이내"
                name="nickname"
                value={nickname}
                onChange={onNicknameChange}
              />
              <CheckButton onClick={onCheckNickname}>닉네임 중복 확인</CheckButton>
            </InputContainer>
          </FormContainer>
  
          <PasswordContainer>
            <FormContainer>
              <label htmlFor="pw">비밀번호</label>
              <PasswordInputField
                id="pw"
                type="password"
                placeholder="비밀번호"
                name="pw"
                value={pw}
                onChange={onPWChange}
              />
              <p>{pwMessage}</p>
            </FormContainer>
  
            <FormContainer>
              <label htmlFor="checkpw">비밀번호 확인</label>
              <PasswordInputField
                id="checkpw"
                type="password"
                placeholder="비밀번호 확인"
                name="pw"
                value={checkpw}
                onChange={onCheckPWChange}
              />
              <p>{checkpwMessage}</p>
            </FormContainer>
          </PasswordContainer>
  
          <SignupButton onClick={sendSignUpData}>회원 가입</SignupButton>
        </SignupContainer>
      </>
  );
}

export default SignupPage;
