import SignUpUI01 from "./Signup01.presenter";
import { useUserName } from "./hooks/useUserName";
import { useRouter } from "next/router";

export default function SignUp01() {
  const router = useRouter();

  const {
    name,
    handleNameValueChange,
    userName //queries에 있는 sendUserName으로 보내기 위한 함수
  } = useUserName();

  const navigateTo = (path) => () => {
    router.push({
      pathname: path,
      query: {
        name: `${name}` //이메일 값을 다음 페이지에 넘김
      },
    },
      `${path}` //url값에 path를 숨기기 위하여 넣는 값
    );
  };

  return (
    <>
      <SignUpUI01
        navigateTo={navigateTo}
        name={name}
        handleNameValueChange={handleNameValueChange}
        userName={userName}
      />
    </>
  )
}