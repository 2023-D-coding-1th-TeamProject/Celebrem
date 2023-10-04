import styled from 'styled-components';

const ProfileWrapper = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 7rem;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 21.8rem;
    height: 21.8rem;
    margin-bottom: 2.5rem;
    border-radius: 50%;
  }
`;

const NickName = styled.span`
  margin-bottom: 2.4rem;
  font-size: ${({ theme }) => theme.fonts.md};
  color: ${({ theme }) => theme.colors.gray400};
`;

const Info = styled.div`
  margin-left: 12.5rem;
  p {
    margin-bottom: 3.2rem;
    font-size: 16px;
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts.base};
  display: block;
  margin-bottom: 2.4rem;
`;

const Description = styled.p`
  width: 47.8rem;
  height: 13rem;
  border-radius: 5px;
  padding: 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  margin-bottom: 3.6rem;
  color: ${({ theme }) => theme.colors.gray400};
`;

export { ProfileWrapper, Overview, NickName, Info, Label, Description };
