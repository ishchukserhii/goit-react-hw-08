import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <div className={css.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
