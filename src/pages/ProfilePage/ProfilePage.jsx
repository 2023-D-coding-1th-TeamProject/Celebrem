import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/Header/Header';
import PROFILEIMAGE from '../../assets/images/profile-img-l.svg';

const ProfilePage = ({ user }) => {
  console.log(user);

  // 사용자 정보를 렌더링하는 코드
  return (
    <>
      <Header />
      <ProfilePageWrapper>
        <Image>
          <img src={PROFILEIMAGE} alt="프로필 사진" />
        </Image>
        <Info>
          <Label>이메일</Label>
          <p>celebrem@test.com</p>
          <Label>소개</Label>
          <Description></Description>
        </Info>
      </ProfilePageWrapper>
    </>
  );
};

const ProfilePageWrapper = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 7rem;
`;

const Image = styled.div`
  width: 21.8rem;
  height: 21.8rem;
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

export default ProfilePage;
