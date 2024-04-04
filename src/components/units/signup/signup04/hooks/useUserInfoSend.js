import { useState } from "react";
import { sendUserInfo } from "../Signup04.queries";
import { useRouter } from "next/router";
import { useNickNameCheck } from "./useNicknameCheck";
import { useRegionSelection } from "../../../../commons/hooks/useRegionSelection";

export const useUserInfoUpSend = () => {
  const router = useRouter();

  const {
    nickName
  } = useNickNameCheck();

  const {
    selectedProvince,
    selectedDistrict,
    selectedSubdistrict
  } = useRegionSelection();

  const email = router.query.email;
  const name = router.query.name;
  const password = router.query.password;
  const passwordConfirm = router.query.passwordConfirm;

  const navigateTo = (path) => {
    router.push({
      pathname: path,
      query: {
        email: email, //이메일 값을 다음 페이지에 넘김
        name: name, //이름값을 넘겨주기 위해서
        password: password,
        passwordConfirm: passwordConfirm,
        nickName: nickName,
        region: selectedProvince,
        subRegion: selectedDistrict,
        subdistrict: selectedSubdistrict
      },
    },
      `${path}` //url값에 path를 숨기기 위하여 넣는 값
    );
  };

  const handleSendUserInfo = async (userInfo, path) => {
    if (
      userInfo.isPossibleNickName === true &&
      userInfo.selectedProvince !== "시/도 선택" &&
      userInfo.selectedDistrict !== "구/군/시" &&
      userInfo.selectedSubdistrict !== "동/읍/면"
    ) {
      try {
        await sendUserInfo({
          nickName: userInfo.nickName,
          province: userInfo.selectedProvince,
          district: userInfo.selectedDistrict,
          subdistrict: userInfo.selectedSubdistrict,
        });
        if (data.success) {
          navigateTo(path);
        }
      } catch (error) {
        console.error("Error updating user info:", error);
      } finally {
      }
    }
  };

  return {
    handleSendUserInfo,
    email, //이메일 값을 다음 페이지에 넘김
    name, //이름값을 넘겨주기 위해서
    password,
    passwordConfirm,
    nickName,
    selectedProvince,
    selectedDistrict,
    selectedSubdistrict
  };
};
