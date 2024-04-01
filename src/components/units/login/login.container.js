import LoginUI from "./Login.presenter";
import { useLoginCheck } from "./hooks/useLoginCheck";
import { useNavigate } from "../../../../src/components/commons/hooks/useNavigate";

export default function Login() {

  const {navigateTo} = useNavigate();

  const {
    email,
    password,
    isPossibleLogin,
    loginMsg,
    handleEmailChange,
    handlePasswordChange,
    verifyLogin
  } = useLoginCheck();

  return (
    <>
      <LoginUI
        navigateTo={navigateTo}
        email={email}
        password={password}
        isPossibleLogin={isPossibleLogin}
        loginMsg={loginMsg}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        verifyLogin={verifyLogin}
      />
    </>
  );
}