import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyledLabel, FilterStyledInput } from './Filter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <FilterStyledLabel>
      Filter by name{' '}
      <FilterStyledInput type="text" value={value} onChange={onChange} />
    </FilterStyledLabel>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
