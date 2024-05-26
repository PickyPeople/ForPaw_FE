import Header from "../../../commons/headers/Headers.container";
import CreateVolunteerUI from "./Create_volunteer.presenter";
import { districtName } from "../../../commons/district/districtName";
import { useRegionSelection } from "../../../commons/hooks/useRegionSelection";
import { useState, useEffect } from "react";

export default function CreateVolunteer() {
  const regions = districtName;

  const [userInfo, setUserInfo] = useState({
    province: "시/도 선택",
    district: "구/군/시",
    subdistrict: "동/읍/면",
  });

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

  return (
    <>
      <Header />
      <CreateVolunteerUI
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
      />
    </>
  )
}