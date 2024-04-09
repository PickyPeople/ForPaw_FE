import VolunteerDetailHeader from "./volunteerDetailHeader/VolunteerDetailHeader.container";
import VolunteerDetailUI from "./VolunteerDetail.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useNoticeClick } from "./hooks/useNoticeClick";
import useFetchVolunteerDetail from "./hooks/useFetchVolunteerDetail";

export default function VolunteerDetail() {

  //공지사항 클릭 관련 기능 & 멤버가 아닌 회원은 다음 페이지로 못넘어가게끔 막는 기능
  const {
    navigateTo,
    clickedIndex,
    isJoinedClikced,
    handleAnnouncementClick,
    ChangeStatus,
    status
  } = useNoticeClick();

  //공지사항, 정규모임, 멤버 등의 정보를 fetch해 오는 기능
  const { volunteerDetailInfos } = useFetchVolunteerDetail();

  return (
    <>
      <VolunteerDetailHeader
        isJoinedClikced={isJoinedClikced}
      />
      <VolunteerDetailUI
        navigateTo={navigateTo}
        volunteerDetailInfos={volunteerDetailInfos}
        clickedIndex={clickedIndex} //공지사항을 클릭한 인데스 값
        handleAnnouncementClick={handleAnnouncementClick} //공지사항을 클릭하였을 때 색 변환 기능
        isJoinedClikced={isJoinedClikced} //회원인지 멤버인지 클릭한 확인 값
        ChangeStatus={ChangeStatus} //가입하기 버튼을 눌렀을 때, status를 변환시켜 주는 기능
        status={status} //자신이 일반회원인지 멤버인지를 담아주는 변수
      />
      <Navigation
        isJoinedClikced={isJoinedClikced}
      />
    </>
  )
}