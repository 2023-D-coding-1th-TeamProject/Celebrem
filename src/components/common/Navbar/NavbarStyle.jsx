import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.nav`
  li,
  button {
    font-size: ${({ theme }) => theme.fonts.md};
    display: block;
    margin-bottom: 3.2rem;
  }
`;

const NavList = styled.ul`
  color: ${({ theme }) => theme.colors.gray400};
`;

const NavLink = styled(Link)`
  &:active {
    color: ${({ theme }) => theme.colors.main};
  }
`;

const Logout = styled.button`
  color: ${({ theme }) => theme.colors.gray400};
`;

const DeleteAccount = styled.button`
  color: ${({ theme }) => theme.colors.gray200};
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
