import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contacts = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.addContact(contacts);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
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
        <Input
          title={'Name'}
          phone={'Numder'}
          name={this.state.name}
          number={this.state.number}
          addContact={this.addContact}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <CreateContactList contacts={contacts} title={'Contacts'} />
      </div>
    );
  }
}

export default App;
