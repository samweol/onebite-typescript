import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { ReactComponent as MainLogo } from "../../../assets/logo.svg";
import styles from "./Signin.module.scss";
import Input from "../../../components/Input/Input";
import { useRef } from "react";
import Button from "../../../components/Button/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signinHandler = async () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("로그인 성공🌟");
        // 상태관리라이브러리에 넣기
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(
          `파이어베이스 오류, errCode : ${errorCode}, errorMessage : ${errorMessage}`
        );
      });
  };

  return (
    <>
      <Header />
      <Layout center={true}>
        <MainLogo style={{ marginTop: "70px" }} />
        <PageHeader title="로그인" />
        <div className={styles.form}>
          <Input labelText="이메일" ref={emailRef} />
          <Input labelText="비밀번호" type="password" ref={passwordRef} />
          <Button onClickHandler={signinHandler}>로그인</Button>
        </div>
      </Layout>
    </>
  );
}
