import { useLoginStatusCheck } from "../../../../../../src/components/commons/hooks/useLoginStatusCheck";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../../commons/headers/Headers.container";
import Navigation from "../../../../commons/navigation/Navigation.container";
import { useRouter } from "next/router";
import QuestionsDetailUI from "./QuestionsDetail.presenter";

export default function QuestionsDetail() {
  const router = useRouter();
  const { navigateTo, navigateBack } = useNavigate();
  const { isLoggedIn } = useLoginStatusCheck();

  return (
    <>
      <Headers />
      <QuestionsDetailUI navigateTo={navigateTo} navigateBack={navigateBack} />
      <Navigation />
    </>
  );
}
