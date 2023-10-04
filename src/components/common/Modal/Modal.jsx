import React from 'react';
// import Button from '../Button/Button';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  InputContainer,
  CodeText,
  InputField,
  ButtonContainer,
  NoButton,
  OkButton,
} from './ModalStyle';

const Modal = ({ title, isOpen, onClose, setAuthCode, handleAxios, showInput }) => {
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
            <CodeText>{title}</CodeText>
            {showInput && (
              <InputField
                id="inputPW"
                type="text"
                placeholder="인증코드"
                onChange={handleAuthCode}
              />
            )}
            <ButtonContainer>
              <NoButton onClick={onClose}>취소</NoButton>
              <OkButton onClick={handleAxios}>확인</OkButton>
            </ButtonContainer>
          </InputContainer>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default Modal;
