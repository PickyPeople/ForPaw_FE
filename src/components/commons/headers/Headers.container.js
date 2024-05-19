import { useRouter } from "next/router";
import HeadersUI from "./Headers.presenter";
import useModalStore from "../../../../src/store/useModalStore";
import { useNavigate } from "../hooks/useNavigate";
import { useLoginStatusCheck } from "../hooks/useLoginStatusCheck";

export default function Headers() {
  const router = useRouter();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();
  const { navigateTo } = useNavigate();

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

  // 각 아이콘에 해당하는 경로
  const paths = {
    home: "/home",
    search: "/info/search",
    alarm: "/info/alarm",
    profile: "/info/profile",
  };

  const handleIconClick = (path) => {
    if (!isLoggedIn) {
      openModal(); // 로그인 경로를 전달
    } else {
      if (router.pathname.startsWith("/adopt")) {
        router.push({
          pathname: path,
          query: {
            name: `searchAdopt`
          }
        });
      } else if (router.pathname.startsWith("/community")) {
        router.push({
          pathname: path,
          query: {
            name: `searchPosts`
          }
        })
      } else if (router.pathname.startsWith("/volunteer")) {
        router.push({
          pathname: path,
          query: {
            name: `searchGroups`
          }
        })
      }
    }
  };

  return (
    <HeadersUI
      title={title}
      navigateTo={navigateTo}
      handleIconClick={handleIconClick}
      paths={paths}
    />
  );
}
