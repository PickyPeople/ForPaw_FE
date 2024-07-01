import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import ReportsUI from "./Reports.presenter";
import useFetchReports from "./hooks/useFetchReports";

export default function Reports() {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);

  const openUserInfo = () => {
    setIsUserInfoClicked(true);
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
  };
  const { reportInfos } = useFetchReports();
  return (
    <>
      <AdminHeaderUI isUserInfoClicked={isUserInfoClicked} />
      <ReportsUI
        isUserInfoClicked={isUserInfoClicked}
        openUserInfo={openUserInfo}
        closeUserInfo={closeUserInfo}
        reportInfos={reportInfos}
      />
    </>
  );
}
