import { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode;
  center?: boolean;
}

export default function Layout(props: Props) {
  const { children, center } = props;
  return (
    <main className={`${styles.layout} ${center && styles.center}`}>
      {children}
    </main>
  );
}
