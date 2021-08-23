import css from '../PhoneList/PhoneList.module.css';
import PhoneItem from './PhoneItem/PhoneItem';

function createContactList({ title, contacts }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul className={css.list}>
        {contacts.map(contact => (
          <PhoneItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </section>
  );
}
export default createContactList;
