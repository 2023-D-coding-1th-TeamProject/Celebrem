import './AccountPageStyle.jsx';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Header from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import Button from '../../components/common/Button/Button.jsx';
import ContentsLayout from '../../layout/ContentsLayout';
import { MyInfo, H1, Label, Description, Email, Empty } from './AccountPageStyle.jsx';
import { getMyProfile } from '../../apis/user.js';
import Spinner from '../../components/common/Spinner/Spinner.jsx';
import { roleState } from '../../atoms/userAtom.jsx';
import ProfileTags from '../../components/common/Tags/ProfileTags.jsx';

const AccountPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const userRole = useRecoilValue(roleState);

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
                {userRole === 'ROLE_INFLUENCER' && (
                  <ProfileTags categories={userProfile.profileTagNames} />
                )}
                <Button size="md" variant="soft" onClick={() => navigate('/mypage/edit')}>
                  수정하기
                </Button>
              </>
            ) : (
              <>
                <Empty>등록된 소개 글이 없습니다.</Empty>
                {userRole === 'ROLE_INFLUENCER' && (
                  <ProfileTags categories={userProfile.profileTagNames} />
                )}
                <Button size="md" variant="soft" onClick={() => navigate('/mypage/edit')}>
                  등록하러 가기
                </Button>
              </>
            )}
          </MyInfo>
        </ContentsLayout>
      </>
    );
  }
};

export default AccountPage;
