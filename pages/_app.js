import "../styles/globals.css";
import useAuthCheck from "../src/components/commons/hooks/useAuthCheck";
import ModalComponent from "../src/components/commons/modal/ModalComponent";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  useAuthCheck(); // 로그인 검증 및 리디렉션 처리

  return (
    <>
      <Component {...pageProps} />
      <ModalComponent />
      <ToastContainer
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
