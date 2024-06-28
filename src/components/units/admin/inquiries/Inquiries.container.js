import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import InquiriesUI from "./Inquiries.presenter";
import useFetchInquiries from "./hooks/useFetchInquiries";

export default function Inquiries(props) {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);

  const openUserInfo = () => {
    setIsUserInfoClicked(true);
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
  };

  const { inquiriesInfos } = useFetchInquiries();

  return (
    <>
      <AdminHeaderUI isUserInfoClicked={isUserInfoClicked}/>
      <InquiriesUI
        isUserInfoClicked={isUserInfoClicked}
        openUserInfo={openUserInfo}
        closeUserInfo={closeUserInfo}
        inquiriesInfos={inquiriesInfos}
      />
    </>
  );
}
