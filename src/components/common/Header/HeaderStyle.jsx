import styled, { css } from 'styled-components';

const HeaderStyle = styled.header`
  width: 100%;
  box-shadow: 0 4px 5px ${({ theme }) => theme.colors.gray100};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 128rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

const HeaderLeftStyle = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 20rem;
    height: 5rem;
  }
`;

const HeaderRightStyle = styled.div`
  img {
    display: block;
    margin: 0 auto 6px;
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const MenuList = styled.ul`
  display: flex;
  li {
    cursor: pointer;
    margin-right: 3.6rem;
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.s};
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Profile = styled.img`
  ${props =>
    props.role === 'ROLE_USER'
      ? css`
          border: 2px solid ${({ theme }) => theme.colors.gray200};
        `
      : css`
          background: ${({ theme }) => theme.colors.influencer};
          border: 2px solid transparent;
        `}
  border-radius: 60px;
`;

const AuthLink = css`
  font-size: ${({ theme }) => theme.fonts.md};
  font-weight: bold;
`;

const Signup = styled.button`
  ${AuthLink}
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 6.2rem;
  padding: 1rem 3.2rem;
  border-radius: 1rem;
`;

const Login = styled.button`
  ${AuthLink}
  color: ${({ theme }) => theme.colors.gray400};
`;

export {
  HeaderStyle,
  Wrapper,
  HeaderLeftStyle,
  HeaderRightStyle,
  MenuList,
  Profile,
  Signup,
  Login,
};
