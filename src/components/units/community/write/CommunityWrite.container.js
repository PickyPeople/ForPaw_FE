import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import CommunityWriteUI from "./CommunityWrite.presenter";

export default function CommunityWrite() {
  const { navigateBack } = useNavigate();

  return <CommunityWriteUI navigateBack={navigateBack} />;
}
