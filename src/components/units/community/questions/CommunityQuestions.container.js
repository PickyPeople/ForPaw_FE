import { useNavigate } from "@/src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityQuestionsUI from "./CommunityQuestions.presenter";

export default function CommunityQuestions() {
  const { navigateTo } = useNavigate();

  return (
    <>
      <Headers />
      <CommunityHandler />
      <CommunityQuestionsUI navigateTo={navigateTo} />
      <Navigation />
    </>
  );
}
