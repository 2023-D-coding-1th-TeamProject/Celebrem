import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ProfileTags = ({ categories }) => {
  return (
    <CategoryTags>
      {categories.map((tag, index) => (
        <CategoryTag key={index}>{tag}</CategoryTag>
      ))}
    </CategoryTags>
  );
};

export default ProfileTags;

ProfileTags.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const CategoryTags = styled.nav`
  display: flex;
  gap: 1rem;
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 20px;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.main};
`;
