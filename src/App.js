import { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import CreateContactList from './components/PhoneList/PhoneList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="App">
        <h2>Phonebook</h2>
        <Input title={'Name'} phone={'Numder'} addContact={this.addContact} />
        <CreateContactList contacts={contacts} title={'Contacts'} />
      </div>
    );
  }
}

export default App;
