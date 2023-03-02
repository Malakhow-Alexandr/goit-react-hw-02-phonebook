import React from 'react';
import { FilterStyledLabel, FilterStyledInput } from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <FilterStyledLabel>
      Filter by name{' '}
      <FilterStyledInput type="text" value={value} onChange={onChange} />
    </FilterStyledLabel>
  );
};
