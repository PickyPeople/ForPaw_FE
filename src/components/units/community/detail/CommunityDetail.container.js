import Navigation from "../../../../../src/components/commons/navigation/Navigation.container";
import CommunityDetailUI from "./CommunityDetail.presenter";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import { useEffect, useRef, useState } from "react";

export default function CommunityDetail() {
  const { navigateTo, navigateBack } = useNavigate();
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const wrapperRef = useRef(null);

  //매뉴를 눌렀을 때 메뉴창이 나오도록 하는 기능 (헤더 컴포넌트에 넘겨줄값이다.)
  const handleMenuClick = () => {
    if (isMenuClicked) setIsMenuClicked(false);
    else setIsMenuClicked(true);
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
  return (
    <>
      <CommunityDetailUI
        wrapperRef={wrapperRef}
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
      <Navigation />
    </>
  );
}
