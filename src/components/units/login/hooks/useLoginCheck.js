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

  const verifyLogin = async () => { //로그인 가능 판단 함수
    try {
      const data = await checkLoginAvailability(email, password);
      if (data.success) { //checkLoginAvailability기능 함수에 email이랑 password를 보낸 뒤, data변수에 저장을 해준다. 그 data변수의 success가 true라면 로그인 가능
        setIspossibleLogin(true); //이것으로 다음 /home으로 이동할 수 있도록 만들자
      } else {
        setIspossibleLogin(false); //false라면 로그인이 불가능 하고 아이디 혹은 비밀번호를 확인해달라는 문구를 뛰운다,
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

