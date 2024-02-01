import styles from "./PageHeader.module.scss";

interface Props {
  title: string;
}
export default function PageHeader(props: Props) {
  const { title } = props;
  return <h1 className={styles.header}>{title}</h1>;
}
