import React, { useEffect } from 'react';
import PROFILE from '../../../assets/images/profile-img-m.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { roleState } from '../../../atoms/userAtom';
import { accountState } from '../../../atoms/userAtom';
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

const Navbar = ({ profile }) => {
  const profileImageUrl = profile?.profileImageUrl || PROFILE;
  const [userAccount, setUserAccount] = useRecoilState(accountState);
  const userRole = useRecoilValue(roleState);
  const role = userRole === 'ROLE_USER' ? 'ROLE_USER' : 'ROLE_INFLUENCER';

  useEffect(() => {
    if (profile) {
      setUserAccount(userAccount => ({
        ...userAccount,
        image: profileImageUrl,
        nickname: profile.nickname,
      }));
    }
  }, [profile, profileImageUrl, setUserAccount]);

  return (
    <NavbarWrapper>
      <UserInfo>
        <Profile src={userAccount.image} role={role} alt="프로필 이미지" />
        <Account>{userAccount.nickname}</Account>
      </UserInfo>
      <NavList>
        <li>
          <NavLink to="edit" isActive={(match, location) => location.pathname.includes('edit')}>
            회원 정보 수정
          </NavLink>
        </li>
        <li>
          <NavLink
            to="register"
            isActive={(match, location) => location.pathname.includes('register')}
          >
            인플루언서 등록
          </NavLink>
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
