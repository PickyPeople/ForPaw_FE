import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import AdoptRequestUI from "./Adopt_Request.presenter";
import useFetchAdoptRequest from "./hooks/useFetchAdoptRequest";

export default function AdoptRequest() {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);

  const openUserInfo = () => {
    setIsUserInfoClicked(true);
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
  }

  const { requestInfos } = useFetchAdoptRequest();

  return (
    <>
      <AdminHeaderUI 
        isUserInfoClicked={isUserInfoClicked}
      />
      <AdoptRequestUI
        isUserInfoClicked={isUserInfoClicked}
        openUserInfo={openUserInfo}
        closeUserInfo={closeUserInfo}
        requestInfos={requestInfos}
      />
    </>
  );
}
