import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import MemberManagementUI from "./Member_Management.presenter";
import useFetchMemberManagement from "./hooks/useFetchMemberManagement";

export default function MemberManagement() {
  const [isActiveClicked, setIsActiveClicked] = useState(false);
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);
  const [changeStatus, setChangeStatus] = useState(false);

  const openUserInfo = () => {
    setIsUserInfoClicked(true);
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
    setIsActiveClicked(false);
    setChangeStatus(false);
  };

  const isActive = () => {
    setIsActiveClicked(true);
  };

  const changeStatusBtn = () => {
    setChangeStatus(true);
    setIsUserInfoClicked(false);
  }

  const { memberInfos } = useFetchMemberManagement();

  return (
    <>
      <AdminHeaderUI
        isUserInfoClicked={isUserInfoClicked}
        isActiveClicked={isActiveClicked}
        changeStatus={changeStatus}
      />
      <MemberManagementUI
        isActiveClicked={isActiveClicked}
        isUserInfoClicked={isUserInfoClicked}
        changeStatus={changeStatus}
        isActive={isActive}
        openUserInfo={openUserInfo}
        changeStatusBtn={changeStatusBtn}
        closeUserInfo={closeUserInfo}
        memberInfos={memberInfos}
      />
    </>
  );
}
