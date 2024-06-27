import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import MemberManagementUI from "./Member_Management.presenter";
import useFetchMemberManagement from "./hooks/useFetchMemberManagement";

export default function MemberManagement() {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);

  const openUserInfo = () => {
    setIsUserInfoClicked(true);
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
  }

  const { memberInfos } = useFetchMemberManagement();

  return (
    <>
      <AdminHeaderUI
        isUserInfoClicked={isUserInfoClicked} 
      />
      <MemberManagementUI
        isUserInfoClicked={isUserInfoClicked}
        openUserInfo={openUserInfo}
        closeUserInfo={closeUserInfo}
        memberInfos={memberInfos}
      />
    </>
  );
}
