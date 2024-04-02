import { useState } from 'react';
import { CheckNickNameDuplication } from '../Signup04.queries';

export const useNickNameCheck = () => {
  const [isVisible, setIsvisible] = useState(false);
  const [nickName, setNickName] = useState("");
  const [isPossibleNickName, setIsPossibleNickName] = useState(undefined);

  //중복확인을 눌렀을 때를 위한 임시용
  const checkNickname = () => { 
    setIsvisible(true);
  }

  const handleNicknameValueChange = (e) => { //닉네임 값을 받아온다
    const inputNickName = e.target.value
    setNickName(inputNickName);

    // 입력값이 유효성 검사를 통과할 때 메시지 업데이트
    if (validateNickName(inputNickName)) {
      setIsPossibleNickName(undefined); // 중복검사 전 상태로 리셋
    } else {
      // 유효성 검사를 통과하지 못하면 즉시 메시지 업데이트
      setIsPossibleNickName(undefined);
    }
  };

  const validateNickName = (nickName) => {
    // 정규 표현식을 사용하여 2자 이상, 12자 이하인지 확인
    const regex = /^.{2,12}$/;
    return regex.test(nickName);
  };
  
  const verifyNickname = async () => {
    try {
      const data = await CheckNickNameDuplication(nickName);
      if (data.isAvailable) {
        setIsPossibleNickName(true);
      } else {
        setIsPossibleNickName(false);
      }
    } catch (error) {
      setIsPossibleNickName(false);
      console.log("중복된 닉네임 입니다.")
    }
  }
  
  return {
    isVisible,
    nickName,
    isPossibleNickName,
    checkNickname,
    handleNicknameValueChange,
    verifyNickname
  }
}

