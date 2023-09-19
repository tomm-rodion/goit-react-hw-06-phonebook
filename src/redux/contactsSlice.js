import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const getInitialContacts = () => {
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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: getInitialContacts(),
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(value) {
        return {
          payload: { id: nanoid(), ...value },
        };
      },
    },
    deleteContact(state, action) {
      const updatedDeleteContact = state.filter(
        contact => contact.id !== action.payload
      );
      return updatedDeleteContact;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
