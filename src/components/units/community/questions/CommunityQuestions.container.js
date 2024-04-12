import { useLoginStatusCheck } from "../../../../../src/components/commons/hooks/useLoginStatusCheck";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityQuestionsUI from "./CommunityQuestions.presenter";
import useModalStore from "../../../../../src/store/useModalStore";
import { useRouter } from "next/router";

export default function CommunityQuestions() {
  const router = useRouter();
  const { navigateTo } = useNavigate();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();

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
      <CommunityQuestionsUI
        navigateTo={navigateTo}
        handleAddIconClick={handleAddIconClick}
      />
      <Navigation />
    </>
  );
}
