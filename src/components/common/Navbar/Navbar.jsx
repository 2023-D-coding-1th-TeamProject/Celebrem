import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PROFILE from '../../../assets/images/profile-img-m.svg';
import Modal from '../Modal/Modal';
import { secession } from '../../../apis/user';
import { removeAllCookie } from '../../../apis/cookie';
import { useRecoilState } from 'recoil';
import { accountState } from '../../../atoms/userAtom';
import {
  NavbarWrapper,
  UserInfo,
  Account,
  NavList,
  NavLink,
  Logout,
  DeleteAccount,
} from './NavbarStyle';

const Navbar = ({ profile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const fetchLogout = () => {
    removeAllCookie();
    localStorage.clear();
    closeLogoutModal();
    navigate('/');
  };

  const fetchSecession = async () => {
    const secessionData = await secession();
    if (secessionData === 204) {
      removeAllCookie();
      localStorage.clear();
      closeDeleteAccountModal();
      navigate('/');
    }
  };

  const openLogoutModal = () => {
    setIsLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModal(false);
  };

  const openDeleteAccountModal = () => {
    setIsDeleteModal(true);
  };

  const closeDeleteAccountModal = () => {
    setIsDeleteModal(false);
  };

  const activeStyle = {
    color: '#F38252',
    fontWeight: 700,
  };

  const profileImageUrl = profile?.profileImageUrl || PROFILE;
  const [userAccount, setUserAccount] = useRecoilState(accountState);

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
        <Account>{userAccount.nickname}</Account>
      </UserInfo>
      <NavList>
        <li>
          <NavLink
            style={location.pathname === '/mypage/edit' ? activeStyle : {}}
            to="/mypage/edit"
          >
            회원 정보 수정
          </NavLink>
        </li>
        <li>
          <NavLink
            style={location.pathname === '/mypage/register' ? activeStyle : {}}
            to="/mypage/register"
          >
            인플루언서 등록
          </NavLink>
        </li>
        <li>
          <NavLink
            style={location.pathname === '/mypage/wishlist' ? activeStyle : {}}
            to="/mypage/wishlist"
          >
            찜
          </NavLink>
        </li>
        <li>
          <NavLink
            style={location.pathname === '/mypage/chat' ? activeStyle : {}}
            to="/mypage/chat"
          >
            채팅
          </NavLink>
        </li>
      </NavList>
      <Logout onClick={() => setIsLogoutModal(true)}>로그아웃</Logout>
      {isLogoutModal && (
        <Modal
          title="Celebrem을 로그아웃하시겠습니까?"
          isOpen={openLogoutModal}
          onClose={closeLogoutModal}
          handleAxios={fetchLogout}
        />
      )}
      <DeleteAccount onClick={() => setIsDeleteModal(true)}>회원 탈퇴</DeleteAccount>
      {isDeleteModal && (
        <Modal
          title="Celebrem을 탈퇴하시겠습니까?"
          isOpen={openDeleteAccountModal}
          onClose={closeDeleteAccountModal}
          handleAxios={fetchSecession}
        />
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
