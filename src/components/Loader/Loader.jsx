import { PropagateLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <PropagateLoader color={"#9893da"} size={20} />
    </div>
  );
};

export default Loader;
