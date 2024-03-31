import { useState, useEffect } from "react";
import { fetchUserInfo as fetchUserInfoAPI } from "../ProfileEdit.queries";

export const useFetchUserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    nickName: "기존 닉네임",
    province: "시/도 선택",
    district: "구/군/시",
    subdistrict: "동/읍/면",
  });

  useEffect(() => {
    const loadUserInfo = async () => {
      const data = await fetchUserInfoAPI();
      setUserInfo({
        nickName: data.nickName,
        province: data.province,
        district: data.district,
        subdistrict: data.subdistrict,
      });
    };

    // loadUserInfo();
  }, []);

  return { userInfo };
};
