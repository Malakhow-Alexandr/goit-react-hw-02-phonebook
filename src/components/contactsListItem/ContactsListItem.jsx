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
