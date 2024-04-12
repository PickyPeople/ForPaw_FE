import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityAdoptionUI from "./CommunityAdoption.presenter";
import useModalStore from "../../../../../src/store/useModalStore";
import { useRouter } from "next/router";
import { useLoginStatusCheck } from "../../../../../src/components/commons/hooks/useLoginStatusCheck";

export default function CommunityAdoption() {
  const router = useRouter();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();
  const { navigateTo } = useNavigate();

  const handleAddIconClick = (path) => {
    if (!isLoggedIn) {
      openModal("이 기능을 사용하기 위해서는 로그인이 필요합니다.");
    } else {
      router.push(path);
    }
  };

  return (
    <>
      <Headers />
      <CommunityHandler />
      <CommunityAdoptionUI
        navigateTo={navigateTo}
        handleAddIconClick={handleAddIconClick}
      />
      <Navigation />
    </>
  );
}
