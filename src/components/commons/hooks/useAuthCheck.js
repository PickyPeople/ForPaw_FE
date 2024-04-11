import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthStore from "../../../store/useAuthStore";
import refreshAccessToken from "../api/refreshAccessToken";

const example = {
  accessToken:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzc2FyQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlkIjoyLCJleHAiOjE2ODcwNTIzNTd9.v-0C5EoV-QfGVC3Qdis1HLfKf4ZaYIBacWQ5ttkdtTOj6QqVJ4KoyQdvxBUz3NvjC-W0gs7EDFgwzMaaV1vuGg",
};

const useAuthCheck = () => {
  const router = useRouter();
  const { accessToken, setAccessToken, clearAccessToken } = useAuthStore();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const { pathname } = router;
    // if (
    //   !isLoggedIn &&
    //   !["/login", "/loading", "/intro"].includes(pathname) &&
    //   !pathname.includes("/signup")
    // ) {
    //   router.push("/login");
    //   return;
    // }

    if (isLoggedIn && !accessToken) {
      // const data = refreshAccessToken();
      // if (data) setAccessToken(data.accessToken);
      // refreshAccessToken(setAccessToken, clearAccessToken);
      setAccessToken(example.accessToken);
    }

    // console.log("isLoggedIn : ", isLoggedIn);
    // console.log("accessToken : ", accessToken);
  }, [router, accessToken, setAccessToken, clearAccessToken]);
};

export default useAuthCheck;
