import { deleteContact } from 'redux/contactsSlice';
import { ItemContact, ButtonDeleteContact } from './ContactItem.styled';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ItemContact>
      <span>
        {name} : {number}
      </span>
      <ButtonDeleteContact
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete contact
      </ButtonDeleteContact>
    </ItemContact>
  );
};
