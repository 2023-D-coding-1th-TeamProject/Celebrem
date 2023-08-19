import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/common/Header/Header';
import BASICPROFILEIMAGE from '../../../assets/images/profile-img-l.svg';
import ADDIMAGE from '../../../assets/icons/icon-upload.svg';
import CheckTags from '../../../components/common/Tags/CheckTags';

const AccountEditPage = () => {
  // 더미데이터 (인플루언서인지 확인여부)
  const isInfluencer = true;

  return (
    <>
      <AccountEditPageWrapper>
        <Header />
        <Form>
          <ImageLabel htmlFor="profile-image">
            <Image src={BASICPROFILEIMAGE} alt="프로필 이미지" />
            <Input type="file" accept="image/png, image/jpg, image/jpeg" id="profile-image" />
          </ImageLabel>
          <Label>이메일</Label>
          <p>celebrem@test.com</p>
          <Label>소개</Label>
          <Description placeholder="나에 대한 소개글을 작성해주세요!"></Description>
          {isInfluencer && (
            <>
              <Label>인스타그램 아이디</Label>
              <TextInput value="인스타그램"></TextInput>
              <Label>태그 설정하기</Label>
              <CheckTags />
            </>
          )}
          <button>수정 완료</button>
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
  button {
    display: block;
    width: 48.5rem;
    padding: 1.8rem 0;
    background: ${({ theme }) => theme.colors.main};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.md};
    font-weight: bold;
  }
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

const Input = styled.input`
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

const TextInput = styled.input`
  width: 48.5rem;
  padding: 1.6rem 1.5rem;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 5px;
  margin-bottom: 2.4rem;
  font-size: 16px;
`;
