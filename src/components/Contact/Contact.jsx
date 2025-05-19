import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const contactRemove = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (

<div className={css.box}>
        <ul className={css.list}>
            <li className={css.item}><FaUser /> {contact.name}</li>
            <li className={css.item}><FaPhone /> {contact.number}</li>
            
        </ul>
        <button type="button" className={css.button} onClick={() => contactRemove(contact.id)}>Delete</button>
    </div>
  );
};
export default Contact;