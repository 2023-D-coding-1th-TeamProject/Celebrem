import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const LogoImage = styled.img`
  width: 27.2rem;
  height: 5rem;
  margin: 10rem auto 7rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const CloseIcon = styled.div`
  width: 100%;
  height: 100%;
  // Add background properties or styles for the close icon if needed
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

const FormLabel = styled.label`
  display: inline-block;
  text-align: center;
  font-size: 16px;
  align-items: flex-start;
  margin-bottom: 1.6rem;
`;

const LoginButton = styled.button`
  width: 48.5rem;
  padding: 1.7rem 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(243, 130, 82);
  color: rgb(255, 255, 255);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  margin: 2.5rem auto 2.8rem;
`;

const TextParagraph = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${(props) => (props.primary ? 'rgb(158, 158, 158)' : 'rgb(80, 80, 80)')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  cursor: pointer;
`;

export {
  LoginContainer,
  LogoImage,
  FormContainer,
  CloseIcon,
  InputField,
  FormLabel,
  LoginButton,
  TextParagraph,
};