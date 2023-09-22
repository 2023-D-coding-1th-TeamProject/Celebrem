import styled from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  margin: 10rem auto 5rem;
`;

const FormContainer = styled.div`
  width: 62.6rem;
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const InputField = styled.input`
  width: 48.5rem;
  padding: 1.6rem 1.5rem;
  margin: 1.6rem 0;
  border: 1px solid rgb(192, 192, 192);
  border-radius: 5px;
`;

const PasswordContainer = styled.div`
  width: 62.6rem;
  display: flex;
  gap: 3.6rem;
`;

const PasswordInputField = styled.input`
  width: 29.5rem;
  padding: 1.6rem 1.5rem;
  margin: 1.6rem 0;
  border: 1px solid rgb(192, 192, 192);
  border-radius: 5px;
`;

const CheckButton = styled.button`
  width: 12.3rem;
  padding: 1.4rem 0;
  margin-left: 1em;
  border-radius: 4px;
  border: none;
  background-color: #fff3ee;
  color: #f38252;
`;

const UnabledButton = styled.button`
  width: 62.6rem;
  padding: 1.9rem 0;
  border-radius: 10px;
  background-color: #ffbca0;
  color: #fcfcfc;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1.6rem;
`;

const AbledButton = styled.button`
  width: 62.6rem;
  padding: 1.9rem 0;
  border-radius: 10px;
  background-color: #f38252;
  color: #fcfcfc;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1.6rem;
`;

export {
  SignupContainer,
  LogoImage,
  FormContainer,
  InputContainer,
  InputField,
  PasswordContainer,
  PasswordInputField,
  CheckButton,
  UnabledButton,
  AbledButton,
};

