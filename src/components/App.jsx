import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './contactsList/ContactLis';
import { ContactForm } from './contactForm/ContactForm';
import { ContactFilter } from './contactFilter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.name === name
      ? alert()
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 15,
          color: '#010101',
        }}
      >
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <div>
          <ContactFilter
            value={this.state.filter}
            onChange={this.changeFilter}
          />
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
