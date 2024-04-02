import { useState, useEffect } from 'react';
import { CheckEmailDuplication } from '../Signup02.queries';

export const useEmailCheck = () => {
  const [email, setEmail] = useState(""); //이메일 id입력을 받을 값
  const [emailOption, setEmailOption] = useState(""); // select의 값을 찾아내는 함수
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);  //이메일 사용가능 여부
  const [isVisible, setIsvisible] = useState(false); //중복확인 누르면 true로 나오게 하는 값
  const [timer, setTimer] = useState(80); // 타이머 초 초기값
  const [timerId, setTimerId] = useState(null); // 타이머 인터벌 ID
  const fullId = `${email}@${emailOption}`;

  const [code, setCode] = useState(1234); //랜덤된 인증번호 4자리


  const handleEmailIdValueChange = (e) => { //이메일 입력을 받는 함수
    setEmail(e.target.value);
  }

  const handleSelectOptionChange = (e) => { //select창에서 주소를 받는 값
    setEmailOption(e.target.value);
  };

  //중복확인을 눌렀을 때 실행되는 함수이지만, 마지막 verifyEmail함수에 들어가는 값이다.
  const handleCheckEmailAndStartTimer = () => { 
    setIsEmailAvailable(true);
    setIsvisible(true);
    setTimer(80);

    clearInterval(timerId);
  };

  const StartTimer = () => {
    if (isEmailAvailable) {
      const id = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 0) {
            clearInterval(id);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
      setTimerId(id); // 타이머 인터벌 ID 저장
    }
  };

  useEffect(() => {
    StartTimer();
  }, [isEmailAvailable]);

  const verifyEmail = async () => { //이것도 중복확인 버튼에 달아두어야 할 것 같다.
    try {
      const data = await CheckEmailDuplication(email);
      if (data.success) {
        setIsEmailAvailable(true);
      }
      else {
        setIsEmailAvailable(false);
      }
    } catch (error) {
      setIsEmailAvailable(false);
      console.log("잘못된 이메일입니다.")
    }
  } 

  return{
    email,
    emailOption,
    isEmailAvailable,
    isVisible,
    timer,
    timerId,
    fullId,
    handleEmailIdValueChange,
    handleSelectOptionChange,
    handleCheckEmailAndStartTimer,
    verifyEmail
  }
}