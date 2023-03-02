import { ContactListItem } from 'components/contactsListItem/ContactsListItem';
import { ListStyled } from './ContactList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ListStyled>
  );
};
