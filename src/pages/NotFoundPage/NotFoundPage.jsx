import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NOTFOUND from '../../assets/images/404-img.svg';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <NotFoundStyle>
      <Wrapper>
        <img src={NOTFOUND} alt="404 이미지" />
        <Content>
          <p>페이지를 찾을 수 없습니다.</p>
          <span>
            페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
            <br />웹 주소가 올바른지 확인해 주세요.
          </span>
          <Home onClick={() => navigate('/')}>홈으로</Home>
          <Prev onClick={() => navigate(-1)}>이전 페이지</Prev>
        </Content>
      </Wrapper>
    </NotFoundStyle>
  );
};

export default NotFoundPage;

const NotFoundStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.main`
  display: flex;

  img {
    width: 27.6rem;
    height: 24rem;
    margin-right: 3.8rem;
  }
  button {
    width: 20rem;
    padding: 1.9rem 0;
    border-radius: 1rem;
  }
  p {
    font-size: ${({ theme }) => theme.fonts.xlg};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1.7rem;
  }
  span {
    font-size: ${({ theme }) => theme.fonts.base};
    color: ${({ theme }) => theme.colors.gray300};
    margin-bottom: 3.7rem;
    display: block;
  }
`;

const Content = styled.div`
  display: flex-end;
  flex-direction: column;
`;

const Home = styled.button`
  color: white;
  background: ${({ theme }) => theme.colors.main};
  margin-right: 1.4rem;
`;

const Prev = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray300};
`;
