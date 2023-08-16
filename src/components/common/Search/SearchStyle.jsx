import styled from 'styled-components';

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
  }
`;

const SearchButton = styled.button`
  transform: translateX(-40px);
  .search {
    width: 2rem;
    height: 2rem;
  }
`;

export { SearchForm, SearchInput, SearchButton };
