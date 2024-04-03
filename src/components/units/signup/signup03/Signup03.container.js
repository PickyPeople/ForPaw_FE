import { useRouter } from "next/router";
import SignUpUI03 from "./Signup03.presenter";
import { useState } from 'react';
import { usePasswordCheck } from "./hooks/usePasswordCheck";

export default function SignUp03() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const email = router.query.email;

  const {
    password,
    passwordConfirm,
    isPasswordMatch,
    isVisible,
    isPasswordAvailable,
    handlePasswordChange,
    handleConfirmPasswordChange,
    verifyPassword
  } = usePasswordCheck();


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
      />
    </>
  )
}