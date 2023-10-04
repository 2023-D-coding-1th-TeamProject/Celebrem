import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import Header from '../../../components/common/Header/Header';
import Button from '../../../components/common/Button/Button';
import Input from '../../../components/common/Input/Input';
import BASICPROFILEIMAGE from '../../../assets/images/profile-img-l.svg';
import ADDIMAGE from '../../../assets/icons/icon-upload.svg';
import CheckTags from '../../../components/common/Tags/CheckTags';
import { roleState } from '../../../atoms/userAtom';
import { getMyProfileForUpdate, updateMyProfile, changeMyProfileImage } from '../../../apis/user';
import Spinner from '../../../components/common/Spinner/Spinner';
import { accountState } from '../../../atoms/userAtom';

const AccountEditPage = () => {
  const navigate = useNavigate();
  const imgRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [userDescription, setUserDescription] = useState('');
  const [userInstaId, setUserInstaId] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const userRole = useRecoilValue(roleState);
  const [account, setAccount] = useRecoilState(accountState);

  const userImage = account.image;
  const formData = new FormData();

  useEffect(() => {
    const handleProfile = async () => {
      const profileData = await getMyProfileForUpdate();
      setUserProfile(profileData);
      setAccount(prevAccount => ({
        ...prevAccount,
        userImage: userImage,
      }));
      setIsLoading(false);
    };
    handleProfile();
  }, [setAccount, userImage]);

  console.log(selectedTags);

  const handleImage = async e => {
    if (e && e.target && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      formData.append('image', file);
      const imgURL = URL.createObjectURL(file);
      setPreviewImage(imgURL);
      await changeMyProfileImage(formData);
      setAccount(prevAccount => ({
        ...prevAccount,
        userImage: previewImage,
      }));
    }
  };

  const handleDescription = e => {
    setUserDescription(e.target.value);
  };

  const handleInstaId = e => {
    setUserInstaId(e.target.value);
  };

  const handleUpdateProfile = async e => {
    e.preventDefault();
    if (userDescription || userInstaId || selectedTags.length > 0) {
      await updateMyProfile(userDescription, userInstaId, selectedTags);
      alert('프로필 수정이 완료되었습니다');
      navigate('/mypage');
    } else if (previewImage) {
      handleImage();
      alert('프로필 수정이 완료되었습니다');
      navigate('/mypage');
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <AccountEditPageWrapper>
        <Header />
        <Form onSubmit={handleUpdateProfile}>
          <ImageLabel htmlFor="profile-image">
            <Image
              src={
                userProfile
                  ? userProfile.profileImageUrl
                  : previewImage
                  ? previewImage
                  : BASICPROFILEIMAGE
              }
              alt="프로필 이미지"
            />
            <ImageInput
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              id="profile-image"
              onChange={handleImage}
              ref={imgRef}
            />
          </ImageLabel>
          <Label>이메일</Label>
          <Email>{userProfile?.email}</Email>
          <Label>소개</Label>
          <Description placeholder="나에 대한 소개글을 작성해주세요!" onChange={handleDescription}>
            {userProfile?.description}
          </Description>
          {userRole === 'ROLE_INFLUENCER' && (
            <>
              <Input
                label="인스타그램 아이디"
                value={userProfile?.instagramId}
                onChange={handleInstaId}
              >
                {userProfile?.instagramId}
              </Input>
              <Label>태그 설정하기</Label>
              <CheckTags selectedTags={selectedTags} onTagToggle={setSelectedTags} />
            </>
          )}
          <Button size="xlg" variant="yes">
            수정 완료
          </Button>
        </Form>
      </AccountEditPageWrapper>
    </>
  );
};

export default AccountEditPage;

const AccountEditPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Form = styled.form`
  font-size: ${({ theme }) => theme.fonts.base};
  margin: 5.5rem auto;
`;

const ImageLabel = styled.label`
  display: block;
  position: relative;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.gray200};
  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6em;
    height: 3.6rem;
    background: url(${ADDIMAGE}) no-repeat center / 3.6rem 3.6rem;
    z-index: 2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

const ImageInput = styled.input`
  width: 0.1rem;
  height: 0.1rem;
  position: absolute;
  z-index: -1000rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.gray400};
`;

const Email = styled.p`
  margin-bottom: 4.2rem;
  font-size: ${({ theme }) => theme.fonts.base};
  color: ${({ theme }) => theme.colors.gray400};
`;

const Description = styled.textarea`
  width: 47.8rem;
  height: 13rem;
  border-radius: 5px;
  padding: 1.3rem;
  background: ${({ theme }) => theme.colors.gray50};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  margin-bottom: 3.6rem;
  color: ${({ theme }) => theme.colors.gray400};
`;
