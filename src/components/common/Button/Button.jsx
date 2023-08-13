// Button.jsx
import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
  //바로가기, 입장하기-둥글
  sm: css`
    --button-font-size: 1rem;
    --button-padding: 8px 12px;
    --button-radius: 20px;
  `,
  //회원가입, 아니요(no), 예
  sm2: css`
    --button-font-size: 0.8rem;
    --button-padding: 8px 12px;
  `,
  //이메일중복확인, 닉네임중복확인(soft)
  sm3: css`
    --button-font-size: 0.8rem;
    --button-padding: 8px 12px;
    --button-radius: 5px;
  `,

  //인스타그램 연결(soft), 등록하러 가기(soft), 찜하기, 채팅하기
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
  `,

  //로그인, 수정완료, 채팅하기
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
  `,
  //등록완료, 회원가입(disabled)
  lg2: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 5px;
  `,
};

const VARIANTS = {
  //필요없음 //디폴트
  yes: css`
    --button-bg-color: #F38252;
    --button-hover-bg-color: #C36035;
  `,
  no: css`
    --button-bg-color: #B4B4B4;
    --button-hover-bg-color: #9F9B9B;
  `,
  //인스타그램 연결, 이메일 중복 확인, 닉네임 중복 확인
  soft: css`
    --button-color: #F38252;
    --button-bg-color: rgba(243, 130, 81, 0.15);
    --button-hover-bg-color: rgba(243, 130, 82, 0.50);
  `
};

function Button({ disabled, size, children }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", Inter;
  word-wrap: break-word
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 10px);
  background: var(--button-bg-color, #F38252);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #C36035);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #F38252);
  }
`;

export default Button;