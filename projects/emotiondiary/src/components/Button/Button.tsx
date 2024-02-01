import { ReactElement } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactElement;
  disabled?: boolean;
  onClickHandler?: () => void;
}
export default function Button(props: Props) {
  const { children, disabled, onClickHandler } = props;
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
