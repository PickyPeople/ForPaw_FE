import Navigation from "../../../../../src/components/commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailUI from "./ChattingDetail.presenter";

export default function ChattingDetail() {
  const { navigateTo, navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailUI navigateTo={navigateTo} navigateBack={navigateBack} />
    </>
  );
}
