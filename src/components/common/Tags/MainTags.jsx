import React from 'react';
import styled from 'styled-components';
import { TAGS } from '../../../constants/CategoryTag';

const MainTags = ({ selectedTag, onSelectTag }) => {
  const tags = ['전체', ...TAGS];

  const handleTagClick = tag => {
    onSelectTag(tag);
  };

  return (
    <CategoryTags>
      {tags.map((tag, index) => (
        <CategoryTag key={index} onClick={() => handleTagClick(tag)} isActive={selectedTag === tag}>
          {tag}
        </CategoryTag>
      ))}
    </CategoryTags>
  );
};

export default MainTags;

const CategoryTags = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  padding: 2rem 0;
`;

const CategoryTag = styled.button`
  width: 7.4rem;
  padding: 6px 0;
  background: ${({ theme, isActive }) => (isActive ? theme.colors.main : theme.colors.gray100)};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.gray300)};
  font-size: 14px;
  border-radius: 2rem;
  font-weight: bold;
`;
