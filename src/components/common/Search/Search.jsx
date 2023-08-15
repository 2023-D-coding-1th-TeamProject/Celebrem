import React from 'react';
import styled from 'styled-components';
import SEARCH from '../../../assets/icons/icon-search.svg';

const Search = () => {
  return (
    <SearchForm>
      <label htmlFor="search-input" className="a11y">
        검색창
      </label>

      <SearchInput type="text" id="search-input" placeholder="인플루언서를 검색해보세요!" />
      <SearchButton type="submit">
        <img className="search" src={SEARCH} alt="검색 버튼" />
      </SearchButton>
    </SearchForm>
  );
};

export default Search;

const SearchForm = styled.form`
  display: flex;
  margin-left: 45px;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 42px;
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 5rem;
  padding-left: 2.2rem;
  color: ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.fonts.base};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray200};
    /* font-weight: normal; */
  }
`;

const SearchButton = styled.button`
  transform: translateX(-40px);
  .search {
    width: 2rem;
    height: 2rem;
  }
`;
