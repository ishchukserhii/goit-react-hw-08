import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (

 <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.box}>
        
          <label className={css.label} htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} autoComplete="name" />

          <ErrorMessage name="name" component="span"  />
       
        
          <label className={css.label} htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            autoComplete="phone"
          />

          <ErrorMessage name="number" component="span"  />
        
        <button type="submit" className={css.buttom}>
          Add contact
        </button>
      </Form>
    </Formik>



   
  );
};

export default ContactForm;
