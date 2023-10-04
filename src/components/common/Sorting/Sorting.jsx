// Sorting.js

import React from 'react';
import styled from 'styled-components';

const Sorting = ({ onSelectOrder, orderType }) => {
  const handleClick = type => {
    onSelectOrder(type);
  };

  return (
    <SortingStyle>
      <Wrapper>
        <button
          onClick={() => handleClick('RANDOM')}
          className={orderType === 'RANDOM' ? 'selected' : ''}
        >
          랜덤순
        </button>
        <button
          onClick={() => handleClick('POPULARITY')}
          className={orderType === 'POPULARITY' ? 'selected' : ''}
        >
          인기도순
        </button>
      </Wrapper>
    </SortingStyle>
  );
};

export default Sorting;

const SortingStyle = styled.div`
  width: 100rem;
  margin: 0 auto 2rem;
  button {
    margin-right: 1rem;
    width: 6rem;
    padding: 5px 0;
    background-color: ${({ theme }) => theme.colors.gray50};
    border-radius: 2rem;
    color: ${({ theme }) => theme.colors.gray300};
    font-size: ${({ theme }) => theme.fonts.s};
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.main15};
    color: ${({ theme }) => theme.colors.main};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
