//import PropTypes from 'prop-types';
//import css from '../Input/Input.module.css';

function Input({ title, phone, name, number, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        {title}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={onChange}
        />
      </label>

      <label>
        {phone}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={onChange}
        />
      </label>
      <button type="submit">add contact</button>
    </form>
  );
}

export default Input;
