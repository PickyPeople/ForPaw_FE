import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import MemberManagementUI from "./Member_Management.presenter";
import useFetchMemberManagement from "./hooks/useFetchMemberManagement";

export default function MemberManagement() {
  const [isClicked, setIsClicked] = useState(false);

  const changeStatus = () => {
    setIsClicked(true);
  };

  const { memberInfos } = useFetchMemberManagement();

  return (
    <>
      <AdminHeaderUI />
      <MemberManagementUI
        changeStatus={changeStatus}
        memberInfos={memberInfos}
      />
    </>
  );
}
