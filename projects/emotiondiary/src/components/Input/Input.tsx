import { forwardRef } from "react";
import styles from "./Input.module.scss";
interface Props {
  type?: string;
  labelText?: string;
  alert?: string;
  placeholder?: string;
  onChangeHandler?: () => void;
}

const Input = forwardRef(
  (props: Props, ref?: React.ForwardedRef<HTMLInputElement> | undefined) => {
    const {
      type = "text",
      labelText,
      placeholder,
      alert,
      onChangeHandler,
    } = props;
    return (
      <div className={styles.inputCont}>
        <label className={styles.inputLabel} htmlFor="">
          {labelText}
        </label>
        <input
          ref={ref}
          className={styles.inputCont}
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        <div className={styles.inputAlert}>{alert}</div>
      </div>
    );
  }
);

export default Input;
