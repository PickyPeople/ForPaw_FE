import SignUpUI04 from "./Signup04.presenter"
import { useRouter } from "next/router";
import { useState } from 'react';
import { useNickNameCheck } from "./hooks/useNickNameCheck";

export default function SignUp04() {

  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const {
    isVisible,
    nickName,
    isPossibleNickName,
    checkNickname,
    handleNicknameValueChange,
    verifyNickname
  } = useNickNameCheck();

  return (
    <>
      <SignUpUI04 
        navigateTo={navigateTo}
        isVisible={isVisible}
        nickName={nickName}
        isPossibleNickName={isPossibleNickName}
        checkNickname={checkNickname}
        handleNicknameValueChange={handleNicknameValueChange}
        verifyNickname={verifyNickname}
      />
    </>
  )
}