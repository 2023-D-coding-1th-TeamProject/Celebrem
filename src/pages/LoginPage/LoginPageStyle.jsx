import styled from 'styled-components';

const LoginStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  img {
    margin: 10rem auto 7rem;
  }
  p {
    margin-bottom: 1.4rem;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray300};
    cursor: pointer;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Signup = styled.a`
  font-weight: normal;
  font-size: 14px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.gray400};
  cursor: pointer;
`;

export { LoginStyle, LoginForm, Signup };
