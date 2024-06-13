import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import InquiriesUI from "./Inquiries.presenter";
import useFetchInquiries from "./hooks/useFetchInquiries";

export default function Inquiries(props) {
  const [isClicked, setIsClicked] = useState(false);

  const changeStatus = () => {
    setIsClicked(true);
  };

  const { inquiriesInfos } = useFetchInquiries();

  return (
    <>
      <AdminHeaderUI />
      <InquiriesUI
        changeStatus={changeStatus}
        inquiriesInfos={inquiriesInfos}
      />
    </>
  );
}
