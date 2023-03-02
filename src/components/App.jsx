import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './contactsList/ContactLis';
import { ContactForm } from './contactForm/ContactForm';
import { ContactFilter } from './contactFilter/Filter';
import { Section } from './Section/Section';

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
    if (this.state.contacts.map(contact => contact.name).includes(name)) {
      return alert(`${name} is alredy in contacts.`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
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
          border: '1px solid black',
          padding: '20px',
          borderRadius: '20px',
          width: 500,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'teal',
          alignItems: 'center',
          fontSize: 15,
          color: '#010101',
          boxShadow: 'rgb(0 0 0 / 50%) 0px 2px 7px',
        }}
      >
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.addContact}></ContactForm>
        </Section>

        <Section title={'Contacts'}>
          <ContactFilter
            value={this.state.filter}
            onChange={this.changeFilter}
          />
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
