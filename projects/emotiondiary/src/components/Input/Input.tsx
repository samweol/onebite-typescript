import { forwardRef } from "react";
import styles from "./Input.module.scss";
interface Props {
  labelText?: string;
  alert: string;
  placeholder?: string;
  onChangeHandler?: () => void;
}

const Input = forwardRef((props: Props, ref) => {
  const { labelText, placeholder, alert, onChangeHandler } = props;
  return (
    <div className={styles.inputCont}>
      <label className={styles.inputLabel} htmlFor="">
        {labelText}
      </label>
      <input
        className={styles.inputCont}
        type="text"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      <div className={styles.inputAlert}>{alert}</div>
    </div>
  );
});

export default Input;
