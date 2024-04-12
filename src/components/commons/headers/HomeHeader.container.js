import { useRouter } from "next/router";
import HomeHeaderUI from "./HomeHeader.presenter";
import useModalStore from "../../../../src/store/useModalStore";
import { useLoginStatusCheck } from "../hooks/useLoginStatusCheck";
import { useNavigate } from "../hooks/useNavigate";

export default function HomeHeader() {
  const router = useRouter();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();
  const { navigateTo } = useNavigate();

  // 각 아이콘에 해당하는 경로
  const paths = {
    search: "/info/search",
    alarm: "/info/alarm",
    profile: "/info/profile",
  };

  const handleIconClick = (path) => {
    if (!isLoggedIn) {
      openModal(); // 로그인 경로를 전달
    } else {
      router.push(path);
    }
  };

  return <HomeHeaderUI handleIconClick={handleIconClick} paths={paths} />;
}
