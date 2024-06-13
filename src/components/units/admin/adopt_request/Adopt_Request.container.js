import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import AdoptRequestUI from "./Adopt_Request.presenter";
import useFetchAdoptRequest from "./hooks/useFetchAdoptRequest";

export default function AdoptRequest() {
  const [isClicked, setIsClicked] = useState(false);

  const changeStatus = () => {
    setIsClicked(true);
  };

  const { requestInfos } = useFetchAdoptRequest();

  return (
    <>
      <AdminHeaderUI />
      <AdoptRequestUI changeStatus={changeStatus} requestInfos={requestInfos} />
    </>
  );
}
