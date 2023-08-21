import styled from 'styled-components';

const MyInfo = styled.main`
  p {
    margin-bottom: 3.2rem;
    font-size: ${({ theme }) => theme.fonts.base};
    color: ${({ theme }) => theme.colors.gray400};
  }
  button {
    font-size: ${({ theme }) => theme.fonts.lg};
    background-color: ${({ theme }) => theme.colors.main15};
    color: ${({ theme }) => theme.colors.main};
    width: 20.8rem;
    padding: 1rem 0;
    border-radius: 1rem;
    font-weight: bold;
  }
`;

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xlg};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  margin-bottom: 4.8rem;
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.fonts.base};
  display: block;
  margin-bottom: 2.4rem;
`;

const Email = styled.p``;

export { MyInfo, H1, Label, Email };
