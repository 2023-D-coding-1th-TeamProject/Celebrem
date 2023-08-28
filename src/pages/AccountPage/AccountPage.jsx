import './AccountPageStyle.jsx';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import ContentsLayout from '../../layout/ContentsLayout';
import { MyInfo, H1, Label, Description, Email, Empty } from './AccountPageStyle.jsx';
import { getMyProfile } from '../../apis/user.js';
import Spinner from '../../components/common/Spinner/Spinner.jsx';
// import ProfileTags from '../../components/common/Tags/ProfileTags.jsx';

const AccountPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const handleProfile = async () => {
      const profileData = await getMyProfile();
      setUserProfile(profileData);
      setIsLoading(false);
      console.log(profileData);
    };
    handleProfile();
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Header />
        <ContentsLayout>
          <Navbar profile={userProfile} />
          <MyInfo>
            <H1>회원정보</H1>
            <Label>이메일</Label>
            <Email>{userProfile?.email}</Email>
            <Label>소개</Label>
            {userProfile?.description ? (
              <>
                <Description placeholder="나에 대한 소개글을 작성해주세요!">
                  {userProfile?.description}
                </Description>
                <button onClick={() => navigate('edit')}>수정하기</button>
              </>
            ) : (
              <>
                <Empty>등록된 소개 글이 없습니다.</Empty>
                <button onClick={() => navigate('edit')}>등록하러 가기</button>
              </>
            )}
            {/* <ProfileTags profile={userProfile} /> */}
          </MyInfo>
        </ContentsLayout>
      </>
    );
  }
};

export default AccountPage;
