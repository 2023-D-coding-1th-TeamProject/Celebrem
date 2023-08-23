import React from 'react';
import styled from 'styled-components';

const Input = ({ id, label, type, placeHolder, value, onChange, onBlur, errorMsg, isValid }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isValid={isValid}
        autoComplete="off"
      />
      {errorMsg && !isValid && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* 스타일을 적용할 수 있는 컴포넌트 래퍼 */
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 1.6rem;
`;

const InputField = styled.input`
  width: 48.5rem;
  padding: 1.6rem 1.5rem;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 5px;
  margin-bottom: 2.4rem;
  font-size: 16px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
`;

const ErrorMsg = styled.p`
  color: red;
  /* 에러 메시지 스타일링 */
`;

export default Input;
