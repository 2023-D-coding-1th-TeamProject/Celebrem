import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTags } from '../../../apis/tag';

const MainTags = ({ selectedTag, onSelectTag }) => {
  const [mainTag, setMainTag] = useState([]);

  useEffect(() => {
    const handleTag = async () => {
      const tagData = await getTags();
      const tagArray = Object.values(tagData);
      console.log(tagArray);
      const tags = [...new Set(tagArray.flat())];
      setMainTag(['전체'].concat(tags));
    };
    handleTag();
  }, []);

  const handleTagClick = tag => {
    onSelectTag(tag);
  };

  return (
    <CategoryTags>
      {mainTag.map((tag, index) => (
        <CategoryTag
          key={index}
          onClick={() => handleTagClick(tag)}
          isActive={selectedTag.includes(tag)}
        >
          {tag}
        </CategoryTag>
      ))}
    </CategoryTags>
  );
};

export default MainTags;

const CategoryTags = styled.nav`
  width: 60%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

const CategoryTag = styled.button`
  padding: 8px 20px;
  background: ${({ theme, isActive }) => (isActive ? theme.colors.main : theme.colors.gray100)};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.gray300)};
  font-size: 14px;
  border-radius: 2rem;
  font-weight: bold;
`;
