import React from 'react';
import Header from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
// import Button from '../../components/common/Button/Button';
import ContentsLayout from '../../layout/ContentsLayout';
import CheckTags from '../../components/common/Tags/CheckTags';
import { MyInfo, H1, Label, Input, Fieldset, Tag } from './RegisterPageStyle';

const RegisterPage = () => {
  return (
    <>
      <Header />
      <ContentsLayout>
        <Navbar />
        <MyInfo>
          <H1>인플루언서 설정</H1>
          <Label>인스타그램 아이디</Label>
          <Input placeholder="이메일을 입력해주세요"></Input>
          <Fieldset>
            <Tag>태그 선택하기</Tag>
            <CheckTags />
          </Fieldset>
          <button>등록 완료</button>
        </MyInfo>
      </ContentsLayout>
    </>
  );
};

export default RegisterPage;
