import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logoutThunk())}>Log out</button>
    </div>
  );
};

export default UserMenu;
