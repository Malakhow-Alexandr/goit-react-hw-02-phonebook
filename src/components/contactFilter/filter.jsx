import React from 'react';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <label>
      Filter by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
