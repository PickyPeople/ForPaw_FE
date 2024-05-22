import AdoptHandlerUI from "./AdoptHandler.presenter";
import { useRouter } from "next/router";
import useModalStore from "../../../../src/store/useModalStore";
import { useLoginStatusCheck } from "../../commons/hooks/useLoginStatusCheck";
import { useNavigate } from "../../commons/hooks/useNavigate";

export default function AdoptHandler() {
  const router = useRouter();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();
  const { navigateTo, isActive } = useNavigate();

  const paths = {
    pets: "/adopt/pets",
    shelters: "/adopt/shelters",
    favorites: "/adopt/favorites",
  };

  const handleFavClick = (path) => {
    if (!isLoggedIn) {
      openModal(); // 로그인 경로를 전달
    } else {
      router.push(path);
    }
  };

  const handleNavigateTo = (path) => {
    if (router.pathname !== path) {
      navigateTo(path)();
    }
  };

  return (
    <AdoptHandlerUI
      isLoggedIn={isLoggedIn}
      isActive={isActive}
      navigateTo={handleNavigateTo}
      handleFavClick={handleFavClick}
      paths={paths}
    />
  );
}
