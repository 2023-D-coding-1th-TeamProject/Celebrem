import React, { useState, useEffect } from 'react';
import Button from '../common/Button/Button';
import ProfileTags from '../common/Tags/ProfileTags';
import PROFILEIMAGE from '../../assets/images/profile-img-l.svg';
import { likeInfluencer } from '../../apis/profile';
import { ProfileWrapper, Overview, NickName, Info, Label, Description } from './ProfileStyle';

const Profile = ({ id, profileData }) => {
  const [userLike, setUserLike] = useState(profileData.like);

  useEffect(() => {
    fetchLike();
  }, [userLike]);

  const toggleLike = () => {
    fetchLike();
  };

  const fetchLike = async () => {
    const likeData = await likeInfluencer(id);
    if (likeData) {
      setUserLike(!userLike);
    }
  };

  console.log(profileData.profileTagNames);

  return (
    <ProfileWrapper>
      <Overview>
        <img
          src={profileData.profileImageUrl ? profileData.profileImageUrl : PROFILEIMAGE}
          alt="프로필 사진"
        />
        <NickName>{profileData.nickname}</NickName>
        {profileData.profileTagNames && <ProfileTags categories={profileData.profileTagNames} />}
      </Overview>
      <Info>
        <Label>이메일</Label>
        <p>{profileData.email}</p>
        <Label>소개</Label>
        <Description>
          {profileData.description ? profileData.description : '소개글이 없음'}
        </Description>
        {userLike ? (
          <Button size="md" variant="yes" onClick={toggleLike}>
            찜하기 취소
          </Button>
        ) : (
          <Button size="md" variant="yes" onClick={toggleLike}>
            찜하기 취소
          </Button>
        )}
        <Button size="md" variant="yes">
          채팅하기
        </Button>
      </Info>
    </ProfileWrapper>
  );
};

export default Profile;
