import styled from 'styled-components';

const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 35rem;
  padding: 3.5rem 0;
  border-radius: 5px;
  position: relative;
  border: 1px solid black;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 15px;
  font-size: 18px;
  cursor: pointer;
  color: rgb(190, 190, 190);
  font-family: Arial, Helvetica, sans-serif;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CodeText = styled.p`
  font-size: 17px;
  margin-bottom: 3rem;
`;

const InputField = styled.input`
  width: 50%;
  padding: 1rem;
  margin-bottom: 3rem;
  border: 1px solid rgb(192, 192, 192);
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const NoButton = styled.button`
  width: 100px;
  padding: 1rem;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

const OkButton = styled.button`
  width: 100px;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 600;
  background-color: #f38252;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: #ac5f3e;
  }
`;

export {
  ModalOverlay,
  ModalContent,
  CloseButton,
  InputContainer,
  CodeText,
  InputField,
  ButtonContainer,
  NoButton,
  OkButton,
};
