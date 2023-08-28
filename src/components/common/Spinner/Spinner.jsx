import React from 'react';
import styled from 'styled-components';
import SPINNER from '../../../assets/icons/icon-spinner.svg';

const Spinner = () => (
  <SpinnerStyle>
    <img src={SPINNER} alt="Loading spinner" />
  </SpinnerStyle>
);

export default Spinner;

const SpinnerStyle = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
`;
