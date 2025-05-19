import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (

 <div className={css.box}>
      <label>Find contacts by name</label>
      <input onChange={(e) => dispatch(changeFilter(e.target.value))}
        value={value}/>
    </div>
  );
};

export default SearchBox;
