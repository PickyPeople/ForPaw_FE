import React from "react";
import ProfileUI from "./ProfileEdit.presenter";
import { districtName } from "../../../../../../src/components/commons/district/districtName";
import { useRegionSelection } from "../../../../../../src/components/commons/hooks/useRegionSelection";
import { useNickNameCheck } from "./hooks/useNickNameCheck";
import { useUserInfoUpdate } from "./hooks/useUserInfoUpdate";
import { useFetchUserInfo } from "./hooks/useFetchUserInfo";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";

export default function ProfileEdit() {
  const regions = districtName;

  const { userInfo } = useFetchUserInfo();

  const {
    nickName,
    isPossibleNickName,
    nickNameMsg,
    handleNickNameChange,
    verifyNickName,
  } = useNickNameCheck();

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

  const updatedUserInfo = {
    nickName: nickName, // useNickNameCheck 훅에서 관리하는 상태
    isPossibleNickName: isPossibleNickName, // 닉네임의 유효성 검사 결과
    selectedProvince: selectedProvince, // useRegionSelection 훅에서 관리하는 상태
    selectedDistrict: selectedDistrict, // useRegionSelection 훅에서 관리하는 상태
    selectedSubdistrict: selectedSubdistrict, // useRegionSelection 훅에서 관리하는 상태
  };

  const { handleUpdateUserInfo } = useUserInfoUpdate();

  const { navigateBack } = useNavigate();

  return (
    <ProfileUI
      navigateBack={navigateBack}
      userInfo={userInfo}
      nickName={nickName}
      isPossibleNickName={isPossibleNickName}
      nickNameMsg={nickNameMsg}
      handleNickNameChange={handleNickNameChange}
      verifyNickName={verifyNickName}
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
      updatedUserInfo={updatedUserInfo}
      handleUpdateUserInfo={handleUpdateUserInfo}
    />
  );
}
