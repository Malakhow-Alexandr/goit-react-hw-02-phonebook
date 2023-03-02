import PropTypes from 'prop-types';
import {
  ListItemStyled,
  ButtonListItem,
  ContactDesc,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <ListItemStyled>
        <ContactDesc>
          {name} : {number}
        </ContactDesc>
        <ButtonListItem
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </ButtonListItem>
      </ListItemStyled>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
