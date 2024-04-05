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

  //닉네임을 정해주기 위한 기능
  const {
    nickName,
    isPossibleNickName,
    checkNickname,
    handleNicknameValueChange,
    verifyNickname
  } = useNickNameCheck();

  //초기 위치 설정들을 위한 기능
  const {
    selectedProvince,
    isProvinceDropdownOpen,
    isProvinceFocused,
    selectedDistrict,
    isDistrictDropdownOpen,
    isDistrictFocused,
    selectedSubdistrict,
    isSubdistrictDropdownOpen,
    isSubdistrictFocused,
    wrapperRef,
    handleProvinceSelect,
    handleDistrictSelect,
    handleSubdistrictSelect,
    toggleDropdown,
  } = useRegionSelection(
    userInfo.province,
    userInfo.district,
    userInfo.subdistrict
  );

  const sendUserInfo = {
    nickName: nickName,
    isPossibleNickName: isPossibleNickName,
    selectedProvince: selectedProvince,
    selectedDistrict: selectedDistrict,
    selectedSubdistrict: selectedSubdistrict,
  }

  const { 
    handleSendUserInfo,
    email, //이메일 값을 다음 페이지에 넘김
    name, //이름값을 넘겨주기 위해서
    password,
    passwordConfirm,
   } = useUserInfoUpSend(); //다음버튼값에 들어가는 값

  const navigateTo = (path)  => {
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