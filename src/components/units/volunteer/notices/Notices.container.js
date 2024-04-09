import NoticesUI from "./Notices.presenter";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useNoticeClick } from "../detail/hooks/useNoticeClick";
import useFetchVolunteerDetail from "../detail/hooks/useFetchVolunteerDetail";

export default function Announcements() {
  //라우팅설정 및 클릭기능
  const { navigateTo, clickedIndex, handleAnnouncementClick, status } =
    useNoticeClick();

  //공지사항, 정규모임, 멤버 등의 정보를 fetch해 오는 기능
  const { volunteerDetailInfos } = useFetchVolunteerDetail();

  return (
    <>
      <Headers />
      <NoticesUI
        navigateTo={navigateTo}
        volunteerDetailInfos={volunteerDetailInfos}
        clickedIndex={clickedIndex}
        handleAnnouncementClick={handleAnnouncementClick}
        status={status}
      />
      <Navigation />
    </>
  );
}
