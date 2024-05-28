import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import MemberManagementUI from "./Member_Management.presenter";

export default function MemberManagement() {
  return(
    <>
      <AdminHeaderUI />
      <MemberManagementUI />
    </>
  )
}