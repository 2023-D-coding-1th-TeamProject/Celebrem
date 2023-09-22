import styled from 'styled-components';

const MyInfo = styled.main``;

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

const Description = styled.p`
  width: 47.8rem;
  height: 13rem;
  border-radius: 10px;
  padding: 1.3rem;
  font-size: ${({ theme }) => theme.fonts.base};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  margin-bottom: 3.6rem;
  color: ${({ theme }) => theme.colors.gray400};
`;

const Email = styled.p`
  white-space: initial;
  overflow: initial;
  text-overflow: initial;
  margin-bottom: 4.2rem;
  font-size: ${({ theme }) => theme.fonts.base};
  color: ${({ theme }) => theme.colors.gray400};
`;

const Empty = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4.2rem;
  font-size: ${({ theme }) => theme.fonts.base};
  color: ${({ theme }) => theme.colors.gray300};
`;

export { MyInfo, H1, Label, Description, Email, Empty };
