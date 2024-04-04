import { useRouter } from "next/router";
import SignUpUI03 from "./Signup03.presenter";
import { useState } from 'react';
import { usePasswordCheck } from "./hooks/usePasswordCheck";

export default function SignUp03() {
  const router = useRouter();

  const {
    email,
    name,
    password,
    passwordConfirm,
    isPasswordMatch,
    isVisible,
    isPasswordAvailable,
    handlePasswordChange,
    handleConfirmPasswordChange,
    verifyPassword
  } = usePasswordCheck();

  const navigateTo = (path) => () => {
    router.push({
      pathname: path,
      query: {
        email: email, //이메일 값을 다음 페이지에 넘김
        name: name, //이름값을 넘겨주기 위해서
        password: password,
        passwordConfirm: passwordConfirm
      },
    },
      `${path}` //url값에 path를 숨기기 위하여 넣는 값
    );
  };


  return (
    <>
      <SignUpUI03
        navigateTo={navigateTo}
        email={email}
        password={password}
        passwordConfirm={passwordConfirm}
        isPasswordMatch={isPasswordMatch}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        isVisible={isVisible}
        isPasswordAvailable={isPasswordAvailable} //사용가능한 비밀번호인지 확인
        verifyPassword={verifyPassword} //다음 버튼에 들어갈 기능
      />
    </>
  )
}