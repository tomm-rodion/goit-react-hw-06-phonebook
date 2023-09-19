import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const valueFilter = useSelector(getFilter);
  console.log('filter:', valueFilter);

  const contactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(valueFilter.toLowerCase())
  );

  return (
    <ul>
      {contactsList.map(({ name, number, id }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </ul>
  );
};
