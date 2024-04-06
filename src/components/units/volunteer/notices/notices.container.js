import NoticesUI from "./notices.presenter";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Announcements() {
  //라우팅 설정
  const router = useRouter();
  const navigateTo = (path) => () => router.push(path);

  const status = router.query.name;

  // 클릭 이벤트 처리를 위한 상태 변수와 상태 업데이트 함수 선언
  const [clickedIndex, setClickedIndex] = useState(-1); // 선택된 공지사항 인덱스를 추적하는 상태

  const handleAnnouncementClick = (index) => {
    // 클릭된 공지사항의 인덱스를 설정
    setClickedIndex(index === clickedIndex ? -1 : index);

    // 2초 후에 클릭된 상태를 초기화하여 원래 색으로 돌아가도록 타이머 설정
    setTimeout(() => {
      setClickedIndex(-1);
    }, 2000);
  };

  const Announcements = [
    {
      id: 1,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "박영빈",
      time: "3시간 전"
    },
    {
      id: 2,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "이름이 길면..",
      time: "23시간 전"
    },
    {
      id: 3,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "5글자 정도..",
      time: "24.02.24"
    },
    {
      id: 4,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "5글자 정도..",
      time: "24.02.24"
    },
    {
      id: 5,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "5글자 정도..",
      time: "24.02.24"
    },
    {
      id: 6,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "5글자 정도..",
      time: "24.02.24"
    },
    {
      id: 7,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "5글자 정도..",
      time: "24.02.24"
    },
    {
      id: 8,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "5글자 정도..",
      time: "24.02.24"
    },
    {
      id: 9,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
      writer: "5글자 정도..",
      time: "24.02.24"
    },
  ];

  return (
    <>
      <Headers />
      <NoticesUI
        navigateTo={navigateTo}
        Announcements={Announcements}
        clickedIndex={clickedIndex}
        handleAnnouncementClick={handleAnnouncementClick}
        status={status}
      />
      <Navigation />
    </>
  )
};