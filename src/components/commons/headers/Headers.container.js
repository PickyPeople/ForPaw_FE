import { useRouter } from "next/router";
import HeadersUI from "./Headers.presenter";

export default function Headers() {
  const router = useRouter();

  // 경로 패턴에 따른 타이틀 설정
  const getTitleByPath = (pathname) => {
    if (pathname.startsWith("/adopt")) {
      return "입양/임시보호";
    } else if (pathname === "/volunteer/create_volunteer") {
      return "새모임 만들기";
    } else if (
      pathname === "/volunteer/detail/regular_meetings/regular_meeting"
    ) {
      return "모임명";
    } else if (pathname === "/volunteer/detail/regular_meetings") {
      return "정기모임";
    } else if (pathname.startsWith("/volunteer")) {
      return "봉사활동";
    } else if (pathname.startsWith("/community")) {
      return "커뮤니티";
    } else if (pathname === "/chatting") {
      return "채팅";
    } else if (pathname === "/home/faq") {
      return "자주하는 질문";
    } else if (pathname === "/home/dogs") {
      return "강아지 키우기";
    } else if (pathname === "/home/cats") {
      return "고양이 키우기";
    } else {
      return ""; // 기본값 혹은 다른 경로에 대한 타이틀 설정
    }
  };

  const title = getTitleByPath(router.pathname);

  // 페이지 이동을 처리하는 함수
  const navigateTo = (iconName) => () => router.push(paths[iconName]);

  // 각 아이콘에 해당하는 경로
  const paths = {
    home: "/home",
    search: "/info/search",
    alarm: "/info/alarm",
    profile: "/info/profile",
  };

  return <HeadersUI title={title} navigateTo={navigateTo} />;
}
