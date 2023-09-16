import { createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const getInitialContacts = () => {
  const savedUpContacts = localStorage.getItem('contacts');
  if (savedUpContacts !== null) {
    const parsContacts = JSON.parse(savedUpContacts);
    return parsContacts;
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

const initialState = {
  contacts: getInitialContacts(),
  filter: '',
};

const updateLocalStorage = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);
export const deleteContact = createAction('contacts/deleteContact');
export const foundContacts = createAction('filter/foundContacts');

export const contactsReducer = createReducer(initialState, builder =>
  builder
    .addCase(addContact, (state, action) => {
      const updatedContactsAdd = [action.payload, ...state.contacts];
      updateLocalStorage(updatedContactsAdd);
      return {
        ...state,
        contacts: updatedContactsAdd,
      };
    })
    .addCase(deleteContact, (state, action) => {
      const updetedDeleteContact = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      updateLocalStorage(updetedDeleteContact);
      return {
        ...state,
        contacts: updetedDeleteContact,
      };
    })
    .addCase(foundContacts, (state, action) => {
      if (typeof action.payload === 'string') {
        // Перевірка, чи action.payload є рядком
        if (action.payload === '') {
          // Якщо поле пошуку порожнє, повертаємо початковий список контактів
          return {
            ...state,
            contacts: getInitialContacts(),
            filter: '',
          };
        } else {
          // Якщо поле пошуку не порожнє, фільтруємо контакти
          return {
            ...state,
            contacts: state.contacts.filter(contact =>
              contact.name.toLowerCase().includes(action.payload.toLowerCase())
            ),
            filter: action.payload,
          };
        }
      } else {
        // Якщо action.payload не є '', просто оновлюємо filter
        return {
          ...state,
          filter: action.payload,
        };
      }
    })
);
