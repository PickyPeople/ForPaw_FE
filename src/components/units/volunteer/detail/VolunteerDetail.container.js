import VolunteerDetailHeader from "./volunteerDetailHeader/VolunteerDetailHeader.container";
import VolunteerDetailUI from "./VolunteerDetail.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function VolunteerDetail() {

  //라우팅 설정
  const router = useRouter();

  // 클릭 이벤트 처리를 위한 상태 변수와 상태 업데이트 함수 선언 공지사항에 쓰임
  const [clickedIndex, setClickedIndex] = useState(-1); // 선택된 공지사항 인덱스를 추적하는 상태
  //가입 여부에서 클릭 상태 확인
  const [isJoinedClikced, setIsJoinedClicked] = useState(false);
  //추천모임에서 온 사람인지 아니면 내 모임에서 온사람인지 판단
  const status = router.query.name;
  //메뉴를 클릭했는가 판단
  const [isMenuClicked, setIsMenuClicked] =useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(true);
  };

  const handleOutsideMenuClick = () => {
    setIsMenuClicked(false);
  };

  //클릭을 하였을 떄 멤버가 아닌 회원은 막는 기능
  const navigateTo = (path) => () => {
    if (status === 'member') {
      router.push({
        pathname: path,
        query: {
          name: 'member'
        }
      });
    } else {
      setIsJoinedClicked(true);
      setTimeout(() => {
        setIsJoinedClicked(false);
      }, 1000);
    }
  }

  //일반유저 status를 member로 바꿔주는 기능
  const ChangeStatus = (path) => () => {
    router.push({
      pathname: path,
      query: {
        name: 'member'
      }
    });
  };

  const handleAnnouncementClick = (index) => {
    if (status === 'member') {
      // 클릭된 공지사항의 인덱스를 설정
      setClickedIndex(index === clickedIndex ? -1 : index);

      // 2초 후에 클릭된 상태를 초기화하여 원래 색으로 돌아가도록 타이머 설정
      setTimeout(() => {
        setClickedIndex(-1);
      }, 2000);
    } 
  };

  const notices = [
    {
      id: 1,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다."
    },
    {
      id: 2,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다."
    },
    {
      id: 3,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다."
    }
  ];

  const Meetings = [
    {
      id: 1,
      detailDate: "2/12 (월)",
      leftDay: 1,
      meetingName: <>유기견 구조활동</>,
      infoName_date: "일시",
      detail_date: "2/12 (월) 오전 11:00",
      infoName_location: "위치",
      detail_location: <>부산대</>,
      infoName_cost: "비용",
      detail_cost: "2천원(신규 인원제외)",
      infoName_Participated: "인원",
      detail_participated: "12",
      maximun_people: "12"
    },
    {
      id: 2,
      detailDate: "2/12 (월)",
      leftDay: 1,
      meetingName: <>유기견 구조활동</>,
      infoName_date: "일시",
      detail_date: "2/12 (월) 오전 11:00",
      infoName_location: "위치",
      detail_location: <>부산대</>,
      infoName_cost: "비용",
      detail_cost: "2천원(신규 인원제외)",
      infoName_Participated: "인원",
      detail_participated: "12",
      maximun_people: "12"
    },
    {
      id: 3,
      detailDate: "2/12 (월)",
      leftDay: 1,
      meetingName: <>유기견 구조활동</>,
      infoName_date: "일시",
      detail_date: "2/12 (월) 오전 11:00",
      infoName_location: "위치",
      detail_location: <>부산대</>,
      infoName_cost: "비용",
      detail_cost: "2천원(신규 인원제외)",
      infoName_Participated: "인원",
      detail_participated: "12",
      maximun_people: "12"
    },
  ];

  const members = [
    {
      id: 1,
      name: "김포포",
      role: "관리자"
    },
    {
      id: 2,
      name: "가나다라마바사",
      role: "매니저"
    },
    {
      id: 3,
      name: "프로봉사러",
      role: "회원"
    },
    {
      id: 4,
      name: "김포포",
      role: "회원"
    },
    {
      id: 5,
      name: "김포포",
      role: "회원"
    },
  ];

  return (
    <div style={{zIndex: "0", position: "relative"}}>
      <VolunteerDetailHeader
        isJoinedClikced={isJoinedClikced}
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        handleOutsideMenuClick={handleOutsideMenuClick}
      />
      <VolunteerDetailUI
        navigateTo={navigateTo}
        notices={notices}
        Meetings={Meetings}
        clickedIndex={clickedIndex}
        handleAnnouncementClick={handleAnnouncementClick}
        isJoinedClikced={isJoinedClikced}
        ChangeStatus={ChangeStatus}
        status={status}
        members={members}
        handleOutsideMenuClick={handleOutsideMenuClick}
      />
      <Navigation
        isJoinedClikced={isJoinedClikced}
      />
    </div>
  )
}