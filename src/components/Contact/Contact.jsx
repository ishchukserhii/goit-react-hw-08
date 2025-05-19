import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
<div className={css.box}>
        <ul className={css.list}>
            <li className={css.item}><FaUser /> {name}</li>
            <li className={css.item}><FaPhone /> {number}</li>
            
        </ul>
        <button type="button" className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>



    
  );
};

export default Contact;
