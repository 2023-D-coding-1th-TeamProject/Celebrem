import './AccountPage.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Header from '../../components/common/Header/Header';
import Button from '../../components/common/Button/Button';
import AccountEditPage from './AccountEdit/AccountEditPage';
import RegisterPage from '../RegisterPage/RegisterPage';

function Test() {
  return (
    <>
      <div className="information">
        <div className="profile-details">회원 정보</div>
        <div className="profile-label">이메일</div>
        <div className="profile-value">kasd342@gmail.com</div>
        <div className="profile-label">소개</div>
        <div className="profile-description">등록된 소개글이 없습니다.</div>
        <Button variant="soft" size="md">
          등록하러 가기
        </Button>
      </div>
    </>
  );
}

function AccountPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-profile">
            <img
              className="sidebar-profile-image"
              src="https://via.placeholder.com/127x127"
              alt="Profile"
            />
            <div className="sidebar-profile-name">디코딩딩</div>
            <div className="sidebar-profile-decoration-line" />
          </div>
          <div className="menu-component">
            <div className="sidebar-item" onClick={() => navigate('/mypage/edit')}>
              회원 정보 수정
            </div>
            <div className="sidebar-item" onClick={() => navigate('/mypage/register')}>
              인플루언서 등록
            </div>
            <div className="sidebar-item">찜</div>
            <div className="sidebar-item">채팅</div>
            <div className="sidebar-item-footer">회원 탈퇴</div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/edit" element={<AccountEditPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default AccountPage;
