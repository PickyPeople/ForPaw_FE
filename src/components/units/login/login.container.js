import LoginUI from "./Login.presenter";
import { useLoginCheck } from "./hooks/useLoginCheck";

export default function Login() {
  const {
    navigateTo,
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