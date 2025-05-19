import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginThunk } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().min(8, "Too Short!").required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.box}>
          <div>
            <label className={css.label} htmlFor={emailFieldId}>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              id={emailFieldId}
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <label className={css.label} htmlFor={passwordFieldId}>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              id={passwordFieldId}
            />
            <ErrorMessage name="password" component="span" />
          </div>
          <button className={css.buttom} type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
