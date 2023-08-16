import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ContentsLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 12.8rem;
  display: flex;
  gap: 130px;
  margin-top: 50px;
  padding: 0 15rem;
`;

ContentsLayout.propTypes = {
  children: PropTypes.node.isRequired, // children 프롭스가 필수임을 나타냄
};

export default ContentsLayout;
