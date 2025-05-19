import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleQuery = (query) => {
    dispatch(changeFilter(query));
  };

  const queryId = useId();
  return (

  <div className={css.box}>
      <label>Find contacts by name</label>
      <input type="text" name="query" value={filter} onChange={(evt) => handleQuery(evt.target.value)} id={queryId}/>
    </div>




  );
};
export default SearchBox;