import { useRouter } from "next/router";
import VolunteerDetailHeaderUI from "./VolunteerDetailHeader.presenter";
import { useState, useRef, useEffect } from "react";

export default function VolunteerDetailHeader(props) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const router = useRouter();
  const status = router.query.name;
  const wrapperRef = useRef(null);

  //매뉴를 눌렀을 때 메뉴창이 나오도록 하는 기능 (헤더 컴포넌트에 넘겨줄값이다.)
  const handleMenuClick = () => {
    setIsMenuClicked(true);
  };

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // 메뉴창 닫기
        setIsMenuClicked(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // 빈 배열을 넘겨 컴포넌트 마운트 시에만 실행되도록 함

  const PrevPage = () => {
    if (status == "member" && router.pathname === "/volunteer/detail") {
      router.push("/volunteer/joined");
    } else {
      router.back();
    }
  };

  const getTitleByPath = (pathname) => {
    if (pathname === "/volunteer/detail") {
      return "봉사모임 이름";
    } else if (pathname === "/volunteer/detail/announcements/announcement") {
      return "공지사항";
    } else {
      return ""; // 기본값 혹은 다른 경로에 대한 타이틀 설정
    }
  };

  const title = getTitleByPath(router.pathname);

  return (
    <>
      <VolunteerDetailHeaderUI
        isJoinedClikced={props.isJoinedClikced}
        title={title}
        PrevPage={PrevPage}
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        wrapperRef={wrapperRef}
      />
    </>
  );
}
