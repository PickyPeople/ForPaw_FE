import { useState } from "react"
import { checkLoginAvailability } from "../Login.queries";

export const useLoginCheck = () => {
  const [email, setEmail] = useState(''); //아이디 입력을 받아오는 변수
  const [password, setPassword] = useState(''); //비밀번호 입력을 받아오는 변수
  const [isPossibleLogin, setIspossibleLogin] = useState(true); //로그인이 가능한지에 대한 변수
  const [loginMsg, setLoginMsg] = useState(''); //로그인 정보가 일치하지 않을 때의 변수

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
    email,
    password,
    isPossibleLogin,
    loginMsg,
    handleEmailChange,
    handlePasswordChange,
    verifyLogin
  }
}

