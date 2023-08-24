import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import LOGO from '../../../assets/images/header-logo-img.svg';
import CHAT from '../../../assets/icons/icon-chat.svg';
import NOTIFYUNREAD from '../../../assets/icons/icon-notify-unread.svg';
import NOTIFY from '../../../assets/icons/icon-notify.svg';
import ADPROFILE from '../../../assets/images/profile-img-xxs.svg';
import INFPROFILE from '../../../assets/images/profileInf-img-xxs.svg';
import Search from '../Search/Search';
import { loginState } from '../../../atoms/userAtom';

import {
  HeaderStyle,
  Wrapper,
  HeaderLeftStyle,
  HeaderRightStyle,
  MenuList,
  Signup,
  Login,
} from './HeaderStyle';

const Header = () => {
  const navigate = useNavigate();

  const [loggedIn] = useRecoilState(loginState);

  // 더미 데이터

  const hasUnRead = false;
  const isInfluencer = false;

  return (
    <>
      <HeaderStyle>
        <Wrapper>
          <HeaderLeftStyle>
            <h1 className="a11y">Celebrem 로고</h1>
            <Link to="/">
              <img src={LOGO} alt="celebrem 로고" />
            </Link>
            <Search />
          </HeaderLeftStyle>
          <HeaderRightStyle>
            {loggedIn ? (
              <MenuList>
                <li>
                  <img src={CHAT} alt="채팅 페이지로 가기" onClick={() => navigate('/chat')} />
                  <span>채팅</span>
                </li>
                <li>
                  <img src={hasUnRead ? NOTIFYUNREAD : NOTIFY} alt="알림" />
                  <span>알림</span>
                </li>
                <li>
                  <img
                    src={isInfluencer ? INFPROFILE : ADPROFILE}
                    alt="마이페이지로 가기"
                    onClick={() => navigate('/mypage')}
                  />
                  <span>마이 페이지</span>
                </li>
              </MenuList>
            ) : (
              <>
                <Signup onClick={() => navigate('/signup')}>회원가입</Signup>
                <Login onClick={() => navigate('/login')}>로그인</Login>
              </>
            )}
          </HeaderRightStyle>
        </Wrapper>
      </HeaderStyle>
    </>
  );
};

export default Header;
