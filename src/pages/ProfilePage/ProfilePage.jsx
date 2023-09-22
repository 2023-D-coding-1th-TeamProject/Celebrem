import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/common/Header/Header';
import Button from '../../components/common/Button/Button';
import ProfileTags from '../../components/common/Tags/ProfileTags';
import PROFILEIMAGE from '../../assets/images/profile-img-l.svg';
import { getProfile } from '../../apis/profile';
import { likeInfluencer } from '../../apis/profile';

const ProfilePage = () => {
  const userId = useParams().influencerId;
  const [userProfile, setUserProfile] = useState([]);
  const [userLike, setUserLike] = useState(false);
  console.log(userProfile);

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchData = async () => {
    const profileData = await getProfile(userId);
    setUserProfile(profileData);
  };

  const handleLike = async () => {
    const likeData = await likeInfluencer(userId);
    console.log(likeData, '찜하기 데이터');
    setUserLike(!likeData);
  };

  return (
    <>
      <Header />
      <ProfilePageWrapper>
        <Overview>
          <img
            src={userProfile.profileImageUrl ? userProfile.profileImageUrl : PROFILEIMAGE}
            alt="프로필 사진"
          />
          <NickName>{userProfile.nickname}</NickName>
          <ProfileTags categories={userProfile.profileTagNames} />
        </Overview>
        <Info>
          <Label>이메일</Label>
          <p>{userProfile.email}</p>
          <Label>소개</Label>
          <Description>
            {userProfile.description ? userProfile.description : '소개글이 없음'}
          </Description>
          {userLike ? (
            <Button size="md" variant="yes" onClick={() => handleLike()}>
              찜하기
            </Button>
          ) : (
            <Button size="md" variant="yes" onClick={() => handleLike()}>
              찜하기 취소
            </Button>
          )}
          <Button size="md" variant="yes">
            채팅하기
          </Button>
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

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 21.8rem;
    height: 21.8rem;
    margin-bottom: 2.5rem;
    border-radius: 50%;
  }
`;

const NickName = styled.span`
  margin-bottom: 2.4rem;
  font-size: ${({ theme }) => theme.fonts.md};
  color: ${({ theme }) => theme.colors.gray400};
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
