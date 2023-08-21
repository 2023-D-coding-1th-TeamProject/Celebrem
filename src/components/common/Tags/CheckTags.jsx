import React, { useState } from 'react';
import styled from 'styled-components';
import UNCHECKED from '../../../assets/icons/icon-checkbox-unchecked.svg';
import CHECKED from '../../../assets/icons/icon-checkbox-checked.svg';

import { TAGS } from '../../../constants/CategoryTag';

export default function CheckTags() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagToggle = tag => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
    } else {
      if (selectedTags.length < 3) {
        setSelectedTags([...selectedTags, tag]);
      } else {
        alert('최대 3개만 설정할 수 있습니다');
      }
    }
  };

  return (
    <CheckboxTag>
      {TAGS.map((tag, index) => (
        <Label key={index}>
          <Checkbox
            type="checkbox"
            checked={selectedTags.includes(tag)}
            onChange={() => handleTagToggle(tag)}
          />
          <IconWrapper>
            <Icon src={selectedTags.includes(tag) ? CHECKED : UNCHECKED} />
          </IconWrapper>
          {tag}
        </Label>
      ))}
    </CheckboxTag>
  );
}

const CheckboxTag = styled.div`
  width: 48.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  gap: 2.5rem;
  margin-bottom: 3.2rem;
`;

const Label = styled.label`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray300};
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const IconWrapper = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;
