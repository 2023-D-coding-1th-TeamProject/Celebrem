import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <H1>홈페이지입니다</H1>
    </>
  );
};

export default HomePage;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.red};
`;
