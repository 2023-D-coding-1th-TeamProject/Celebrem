import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;
  padding: 3rem;
  height: 45rem;
  li {
    font-size: ${({ theme }) => theme.fonts.md};
    display: block;
    margin-bottom: 3.2rem;
  }
`;

const NavList = styled.ul`
  color: ${({ theme }) => theme.colors.gray400};
`;

const NavLink = styled(Link)``;

const Logout = styled.button`
  color: ${({ theme }) => theme.colors.gray400};
  display: block;
  margin-bottom: 3.2rem;
  font-size: ${({ theme }) => theme.fonts.md};
`;

const DeleteAccount = styled.button`
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fonts.md};
`;

const UserInfo = styled.div`
  width: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Profile = styled.img`
  width: 10.2rem;
  height: 10.2rem;
  margin: 0 auto;
  ${props =>
    props.role === 'ROLE_USER'
      ? css`
          border: 4px solid ${({ theme }) => theme.colors.gray200};
        `
      : css`
          background: ${({ theme }) => theme.colors.influencer};
          border: 4px solid transparent;
        `}
  border-radius: 50%;
`;

const Account = styled.span`
  display: block;
  padding: 1.6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray400};
  margin-bottom: 3.2rem;
  font-size: ${({ theme }) => theme.fonts.base};
  text-align: center;
`;

export { NavbarWrapper, UserInfo, Profile, Account, NavList, NavLink, Logout, DeleteAccount };
