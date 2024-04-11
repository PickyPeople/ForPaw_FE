import { useState } from "react";
import { requestLoginToken } from "../Login.queries";
import { useRouter } from "next/router";
import useAuthStore from "../../../../../src/store/useAuthStore";

export const useLoginCheck = (email, password) => {
  const router = useRouter();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const verifyLogin = async () => {
    try {
      const data = await requestLoginToken(email, password);
      if (data.accessToken) {
        localStorage.setItem("isLoggedIn", true);
        setAccessToken(data.accessToken);
        router.push("/home");
      }
    } catch (error) {
      console.error("로그인 안됨:", error);
    }
  };

  return { verifyLogin };
};
