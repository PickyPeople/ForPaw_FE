import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import ReportsUI from "./Reports.presenter";
import useFetchReports from "./hooks/useFetchReports";

export default function Reports() {
  const [isClicked, setIsClicked] = useState(false);

  const changeStatus = () => {
    setIsClicked(true);
  };

  const { reportInfos } = useFetchReports();
  return (
    <>
      <AdminHeaderUI />
      <ReportsUI 
        changeStatus={changeStatus}
        reportInfos={reportInfos}
      />
    </>
  );
}
