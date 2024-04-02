import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import SignUpUI02 from "./Signup02.presenter";
import { useEmailCheck } from "./hooks/useEmailCheck";

export default function SignUp02() {
  const router = useRouter();

  const {
    email,
    emailOption,
    isEmailAvailable,
    isVisible,
    timer,
    fullId,
    code,
    handleEmailIdValueChange,
    handleSelectOptionChange,
    handleCheckEmailAndStartTimer, //이 기능은 나중에 없어질 예정
    verifyEmail, //중복확인을 누르면 백에서 판단을 하여 사용가능한 이메일인지 알려준다.
    verifyCode //다음을 누르면 인증번호가 맞는지 확인하고 다음으로 넘어가게끔 할 수 있게끔
  } = useEmailCheck();

  const navigateTo = (path) => () => {
    router.push({
      pathname: path,
      query: {
        email: `${fullId}` //이메일 값을 다음 페이지에 넘김
      },
    },
      `${path}` //url값에 path를 숨기기 위하여 넣는 값
    );
  };

  return (
    <>
      <SignUpUI02
        navigateTo={navigateTo}
        email={email}
        handleEmailIdValueChange={handleEmailIdValueChange}
        emailOption={emailOption}
        handleSelectOptionChange={handleSelectOptionChange}
        isEmailAvailable={isEmailAvailable}
        isVisible={isVisible}
        code={code}
        timer={timer}
        handleCheckEmailAndStartTimer={handleCheckEmailAndStartTimer}
        verifyEmail={verifyEmail}
        verifyCode={verifyCode} //다음버튼에 들어가는 함수
      />
    </>
  )
}