import { useState } from "react";
import { updateUserInfo } from "../ProfileEdit.queries";

export const useUserInfoUpdate = () => {
  const handleUpdateUserInfo = async (userInfo) => {
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
    handleUpdateUserInfo,
  };
};
