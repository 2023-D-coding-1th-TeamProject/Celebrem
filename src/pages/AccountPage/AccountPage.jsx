import './AccountPageStyle.jsx';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
// import Button from '../../components/common/Button/Button';
import ContentsLayout from '../../layout/ContentsLayout';
import { MyInfo, H1, Label, Email } from './AccountPageStyle.jsx';

const AccountPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <ContentsLayout>
        <Navbar />
        <MyInfo>
          <H1>회원정보</H1>
          <Label>이메일</Label>
          <Email>celebrem@test.com</Email>
          <Label>소개</Label>
          <p>등록된 소개글이 없습니다.</p>
          <button onClick={() => navigate('edit')}>등록하러 가기</button>
        </MyInfo>
      </ContentsLayout>
    </>
  );
};

export default AccountPage;
