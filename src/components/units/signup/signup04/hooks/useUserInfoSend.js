import { useState } from "react";
import { sendUserInfo } from "../Signup04.queries";

export const useUserInfoUpSend = () => {
  const handleSendUserInfo = async (userInfo) => {
    if (
      userInfo.isPossibleNickName === true &&
      userInfo.selectedProvince !== "시/도 선택" &&
      userInfo.selectedDistrict !== "구/군/시" &&
      userInfo.selectedSubdistrict !== "동/읍/면"
    ) {
      try {
        await updateUserInfo({
          nickName: userInfo.nickName,
          province: userInfo.selectedProvince,
          district: userInfo.selectedDistrict,
          subdistrict: userInfo.selectedSubdistrict,
        });
      } catch (error) {
        console.error("Error updating user info:", error);
      } finally {
      }
    }
  };

  return {
    handleSendUserInfo,
  };
};
