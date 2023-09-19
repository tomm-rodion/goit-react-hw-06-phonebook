import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

// генератори єкшенов
export const { setFilter } = contactsFilterSlice.actions;
// редусер слайс
export const filterReducer = contactsFilterSlice.reducer;

//  {
//     foundContacts(state, action) {
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
//     },
//   },
