import { useEffect, useState } from "react";

export const useDragHandler = () => {
  const [topPosition, setTopPosition] = useState("0px"); // 초기 top 위치 설정
  const [topIconPosition, setTopIconPosition] = useState("0px");

  useEffect(() => {
    const screenHeight = window.innerHeight;

    // 드래그 이벤트 핸들링 로직
    const handleDrag = (event) => {
      event.preventDefault();
      const minY = screenHeight - 433; // 화면 하단에서 433px 위
      const maxY = screenHeight - 120; // 화면 하단에서 120px 위

      let newTopPosition = event.clientY;
      let newTopIconPosition = newTopPosition - 65;

      if (newTopPosition < minY) {
        newTopPosition = minY; // 최소 높이보다 더 올라가지 못하게 함
        newTopIconPosition = minY - 65;
      } else if (newTopPosition > maxY) {
        newTopPosition = maxY; // 최대 높이보다 더 내려가지 못하게 함
        newTopIconPosition = maxY - 65;
      }

      setTopPosition(`${newTopPosition}px`);
      setTopIconPosition(`${newTopIconPosition}px`);
    };

    const mapInfo = document.getElementById("map-info-drag-block");
    mapInfo.addEventListener("mousedown", () => {
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", handleDrag);
        },
        { once: true }
      );
    });

    // 초기 topPosition 설정 로직
    const updateTopPosition = () => {
      const calculatedTop = window.innerHeight - 223; // 화면 하단에서 2px 위
      const calculatedTopIcon = calculatedTop - 65;
      setTopPosition(`${calculatedTop}px`); // 계산된 값을 상태에 반영
      setTopIconPosition(`${calculatedTopIcon}px`);
    };

    updateTopPosition(); // 컴포넌트 마운트 시 함수 실행

    // 화면 크기가 변경될 때마다 topPosition 업데이트
    window.addEventListener("resize", updateTopPosition);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("resize", updateTopPosition);
    };
  }, []);

  return {
    topPosition,
    topIconPosition,
  };
};
