import styles from "./Header.module.scss";
import { ReactComponent as MainLogo } from "../../assets/logo.svg";

export default function Header() {
  const userName = "홍길동";
  return (
    <header className={styles.header}>
      <a href="/">
        <MainLogo />
      </a>
      <ul className={styles.headerMenuList}>
        <li className={styles.userInfo}>
          환영합니다 <span>{userName}님!</span>
        </li>
        <li className={styles.headerMenuItem}>
          <a>로그인</a>
        </li>
        <li className={styles.headerMenuItem}>
          <a>회원가입</a>
        </li>
        <li className={styles.headerMenuItem}>
          <a>로그아웃</a>
        </li>
      </ul>
    </header>
  );
}
