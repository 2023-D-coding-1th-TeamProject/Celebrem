import React from 'react';
// import Button from '../Button/Button';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  InputContainer,
  CodeText,
  InputField,
  NoButton,
  OkButton,
} from './ModalStyle';

const Modal = ({ isOpen, onClose, setAuthCode, emailCodeVerify }) => {
  if (!isOpen) return null;

  const handleAuthCode = e => {
    setAuthCode(e.target.value);
  };

  return (
    <>
      <ModalOverlay>
        <ModalContent>
          <CloseButton onClick={onClose}>X</CloseButton>
          <InputContainer>
            <CodeText>인증코드를 입력해주세요</CodeText>
            <InputField id="inputPW" type="text" placeholder="인증코드" onChange={handleAuthCode} />
            <div>
              <NoButton onClick={onClose}>취소</NoButton>
              <OkButton onClick={emailCodeVerify}>확인</OkButton>
            </div>
          </InputContainer>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default Modal;
