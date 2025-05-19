import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps'
import { selectError, selectLoading } from '../../redux//contactsSlice';


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div >
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </div>
  );
}

export default App;