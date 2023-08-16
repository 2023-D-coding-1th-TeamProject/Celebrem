import React from 'react';
import SEARCH from '../../../assets/icons/icon-search.svg';
import { SearchForm, SearchInput, SearchButton } from './SearchStyle';

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
