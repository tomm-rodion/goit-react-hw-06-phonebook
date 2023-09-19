import { setFilter } from 'redux/filterSlice';
import { FilterInput, LabelSearchContact } from './CotactsFilter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter);
  console.log('useSelector', filter);
  const dispatch = useDispatch();

  const onChange = e => {
    const searchQuery = e.target.value;
    return dispatch(setFilter(searchQuery));
  };
  return (
    <>
      <LabelSearchContact htmlFor="filter">
        Search contact by name
      </LabelSearchContact>
      <FilterInput
        type="text"
        placeholder="Name"
        autoComplete="off"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};
