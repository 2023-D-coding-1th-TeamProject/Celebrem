import React from 'react';
import PROFILE from '../../../assets/images/profile-img-m.svg';

import {
  NavbarWrapper,
  UserInfo,
  Profile,
  Account,
  NavList,
  NavLink,
  Logout,
  DeleteAccount,
} from './NavbarStyle';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <UserInfo>
        <Profile src={PROFILE} />
        <Account>디코딩딩</Account>
      </UserInfo>
      <NavList>
        <li>
          <NavLink to="edit">회원 정보 수정</NavLink>
        </li>
        <li>
          <NavLink to="register">인플루언서 등록</NavLink>
        </li>
        <li>
          <NavLink to="register">찜</NavLink>
        </li>
        <li>
          <NavLink to="register">채팅</NavLink>
        </li>
      </NavList>
      <Logout>로그아웃</Logout>
      <DeleteAccount>회원 탈퇴</DeleteAccount>
    </NavbarWrapper>
  );
};

export default Navbar;
