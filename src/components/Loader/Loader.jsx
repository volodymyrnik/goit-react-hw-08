import { RingLoader } from "react-spinners";
import css from "./Loader.module.css";

const Spinner = ({ loading, size = 60, color = "#008000" }) => {
  return (
    <div className={css.spinnerContainer}>
      <RingLoader size={size} color={color} loading={loading} />
    </div>
  );
};

export default Spinner;