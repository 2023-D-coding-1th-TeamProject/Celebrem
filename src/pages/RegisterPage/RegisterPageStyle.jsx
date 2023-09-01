import styled from 'styled-components';

const MyInfo = styled.main`
  p {
    margin-bottom: 3.2rem;
    font-size: ${({ theme }) => theme.fonts.base};
    color: ${({ theme }) => theme.colors.gray400};
  }
  button {
    display: block;
    font-size: ${({ theme }) => theme.fonts.lg};
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};
    width: 48.5rem;
    padding: 1.7rem 0;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xlg};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  margin-bottom: 4.8rem;
`;

const Form = styled.form``;

const Fieldset = styled.fieldset`
  margin-bottom: 3.2rem;
`;

const Tag = styled.legend`
  font-size: ${({ theme }) => theme.fonts.base};
  margin-bottom: 2.4rem;
`;

export { MyInfo, H1, Form, Fieldset, Tag };
