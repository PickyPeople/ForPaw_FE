import React from "react";
import SignUpUI04 from "./Signup04.presenter"
import { useNickNameCheck } from "./hooks/useNicknameCheck";
import { districtName } from "../../../commons/district/districtName";
import { useRegionSelection } from "../../../commons/hooks/useRegionSelection";
import { useFetchUserInfo } from "./hooks/useFetchUserInfo";
import { useUserInfoUpSend } from "./hooks/useUserInfoSend";
import { useRouter } from "next/router";

export default function SignUp04() {
  const regions = districtName;

  const { userInfo } = useFetchUserInfo();

  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const {
    nickName,
    isPossibleNickName,
    checkNickname,
    handleNicknameValueChange,
    verifyNickname
  } = useNickNameCheck();

  return (
    <>
      <SignUpUI04
        navigateTo={navigateTo}
        nickName={nickName}
        isPossibleNickName={isPossibleNickName}
        checkNickname={checkNickname}
        handleNicknameValueChange={handleNicknameValueChange}
        verifyNickname={verifyNickname}
        regions={regions}
        wrapperRef={wrapperRef}
        selectedProvince={selectedProvince}
        isProvinceFocused={isProvinceFocused}
        isProvinceDropdownOpen={isProvinceDropdownOpen}
        toggleProvinceDropdown={() => toggleDropdown("province")}
        handleProvinceSelect={handleProvinceSelect}
        selectedDistrict={selectedDistrict}
        isDistrictFocused={isDistrictFocused}
        isDistrictDropdownOpen={isDistrictDropdownOpen}
        toggleDistrictDropdown={() => toggleDropdown("district")}
        handleDistrictSelect={handleDistrictSelect}
        selectedSubdistrict={selectedSubdistrict}
        isSubdistrictFocused={isSubdistrictFocused}
        isSubdistrictDropdownOpen={isSubdistrictDropdownOpen}
        toggleSubdistrictDropdown={() => toggleDropdown("subdistrict")}
        handleSubdistrictSelect={handleSubdistrictSelect}
        sendUserInfo={sendUserInfo} //handleSendUserInfo의 파라미터에 넣을 변수
        handleSendUserInfo={handleSendUserInfo}  //완료 버튼에 들어갈 기능
      />
    </>
  )
}