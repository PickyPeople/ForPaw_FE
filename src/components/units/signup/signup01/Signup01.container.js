import SignUpUI01 from "./Signup01.presenter";
import { useUserName } from "./hooks/useUserName";
import { useNavigate } from "../../../commons/hooks/useNavigate";

export default function SignUp01() {

  const { navigateTo } = useNavigate();

  const {
    name,
    handleNameValueChange,
    userName //queries에 있는 sendUserName으로 보내기 위한 함수
  } = useUserName();

  return (
    <>
      <SignUpUI01
        navigateTo={navigateTo}
        name={name}
        handleNameValueChange={handleNameValueChange}
      />
    </>
  )
}