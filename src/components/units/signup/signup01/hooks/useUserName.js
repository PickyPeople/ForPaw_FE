import { useState } from "react";
import { sendUserName } from "../Signup01.queries"

export const useUserName = () => {
  const [name, setName] = useState("");

  const handleNameValueChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  }

  const userName = async () => {
    try {
      const data = await sendUserName(name);
    } catch (error) {
      console.error("사용할 수 없는 이름:", error);
    }
  } 

  return {
    name,
    handleNameValueChange,
    userName //다음버튼에 달아둘 함수
  }
}