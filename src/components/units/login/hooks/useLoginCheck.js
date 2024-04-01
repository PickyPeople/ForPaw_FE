import { useState } from "react"
import { checkLoginAvailability } from "../Login.queries";
import { useRouter } from "next/router";

export const useLoginCheck = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPossibleLogin, setIspossibleLogin] = useState(true);
  const [loginMsg, setLoginMsg] = useState('');

  const navigateTo = (path) => () => {
    router.push(path);
  }

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  }

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  }

  const verifyLogin = async () => {
    try {
      const data = await checkLoginAvailability(email, password);
      if (data.isAvailable) {
        setIspossibleLogin(true);
      } else {
        setIspossibleLogin(false);
        setLoginMsg('가입된 아이디 혹은 비밀번호를 확인해 주십시오');
      }
    } catch (error) {
      console.error("로그인 안됨:", error);
      // 여기에 에러 처리 로직 추가
      setIspossibleLogin(false);
      // 에러 상황에 대한 적절한 메시지 설정
    }
  }

  return {
    navigateTo,
    email,
    password,
    isPossibleLogin,
    loginMsg,
    handleEmailChange,
    handlePasswordChange,
    verifyLogin
  }
}

