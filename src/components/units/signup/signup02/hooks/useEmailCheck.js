import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { CheckEmailDuplication } from '../Signup02.queries';

export const useEmailCheck = () => {
  const [email, setEmail] = useState(""); //이메일 id입력을 받을 값
  const [emailOption, setEmailOption] = useState(""); // select의 값을 찾아내는 함수
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);  //이메일 사용가능 여부
  const [isVisible, setIsvisible] = useState(false); //중복확인 누르면 true로 나오게 하는 값 처음에는 안보이게 하기 위해서 설정하는 값
  const [timer, setTimer] = useState(80); // 타이머 초 초기값
  const [timerId, setTimerId] = useState(null); // 타이머 인터벌 ID
  const fullId = `${email}@${emailOption}`;
  const [code, setCode] = useState(1234); //랜덤된 인증번호 4자리
  const router = useRouter();


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

  const createCode = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setCode(randomNum);
  }

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

  const verifyEmail = async () => { //중복확인 버튼을 눌리면 실행이 되는 함수
    try {
      const data = await CheckEmailDuplication(email, null);
      if (data.success) {
        setIsEmailAvailable(true);
        setIsvisible(true);
        setTimer(80);
        createCode();
        clearInterval(timerId);
      }
      else {
        setIsEmailAvailable(false);
      }
    } catch (error) {
      setIsEmailAvailable(false);
      console.log("잘못된 이메일입니다.")
    }
  }

  const verifyCode = async() => { //코드 일치 확인여부 그리고 다음버튼에 들어가는 값
    try{
      const data = await CheckEmailDuplication(email, code);
      if(data.success) {
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
      }
    } catch(error){
      console.log("인증번호가 일치하지 않습니다.")
    }
  }

  return {
    email,
    emailOption,
    isEmailAvailable,
    isVisible,
    timer,
    timerId,
    fullId,
    code,
    handleEmailIdValueChange,
    handleSelectOptionChange,
    handleCheckEmailAndStartTimer,
    verifyEmail,
    verifyCode
  }
}