import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       const updatedContactsAdd = [action.payload, ...state.contacts];
//       updateLocalStorage(updatedContactsAdd);
//       return {
//         ...state,
//         contacts: updatedContactsAdd,
//       };
//     case 'contacts/deleteContact':
//       const updetedDeleteContact = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//       updateLocalStorage(updetedDeleteContact);
//       return {
//         ...state,
//         contacts: updetedDeleteContact,
//       };
//     case 'filter/foundContacts':
//       if (typeof action.payload === 'string') {
//         // Перевірка, чи action.payload є рядком
//         if (action.payload === '') {
//           // Якщо поле пошуку порожнє, повертаємо початковий список контактів
//           return {
//             ...state,
//             contacts: getInitialContacts(),
//             filter: '',
//           };
//         } else {
//           // Якщо поле пошуку не порожнє, фільтруємо контакти
//           return {
//             ...state,
//             contacts: state.contacts.filter(contact =>
//               contact.name.toLowerCase().includes(action.payload.toLowerCase())
//             ),
//             filter: action.payload,
//           };
//         }
//       } else {
//         // Якщо action.payload не є '', просто оновлюємо filter
//         return {
//           ...state,
//           filter: action.payload,
//         };
//       }
//     default:
//       return state;
//   }
// };

//      ////Actions

// export const addContact = ({ name, number }) => {
//   return {
//     type: 'contacts/addContact',
//     payload: { id: nanoid(), name, number },
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: id,
//   };
// };

// export const foundContacts = name => {
//   return {
//     type: 'filter/foundContacts',
//     payload: name,
//   };
// };
