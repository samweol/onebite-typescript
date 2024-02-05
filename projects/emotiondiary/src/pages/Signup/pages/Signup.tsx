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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const signupHandler = async () => {
    const auth = getAuth();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const nickname = nicknameRef.current!.value;

    createUserWithEmailAndPassword(
      auth,
      emailRef.current!.value,
      passwordRef.current!.value
    )
      .then(async (userCredential) => {
        const user = userCredential.user;
        await addDoc(collection(db, "user"), {
          uid: user.uid,
          email,
          nickname,
          password,
        });

        console.log("회원가입 성공🌟");
        navigate("/signin");
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
