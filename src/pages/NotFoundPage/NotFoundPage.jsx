import { replace } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <h2 className={css.message}>Oops! Page not found. Redirecting you..</h2>
  );
};

export default NotFoundPage;
