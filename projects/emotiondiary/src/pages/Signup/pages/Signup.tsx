import Button from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";
import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { ReactComponent as MainLogo } from "../../../assets/logo.svg";
import styles from "./Signup.module.scss";
import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signupHandler = async () => {
    try {
      console.log("signupHandler 진입");
      await addDoc(collection(db, "user"), {
        uid: uuidv4(),
        email: emailRef.current!.value,
        nickname: nicknameRef.current!.value,
        password: passwordRef.current!.value,
      });
      console.log("회원가입 성공");
    } catch (err) {
      console.log("회원가입 실패");
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <Layout center={true}>
        <MainLogo style={{ marginTop: "70px" }} />
        <PageHeader title="회원가입" />
        <div className={styles.form}>
          <Input labelText="이메일" ref={emailRef} />
          <Input labelText="닉네임" ref={nicknameRef} />
          <Input labelText="비밀번호" type="password" ref={passwordRef} />
          <Button onClickHandler={signupHandler}>회원가입</Button>
        </div>
      </Layout>
    </>
  );
}
