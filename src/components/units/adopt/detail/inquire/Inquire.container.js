import InquireUI from "./Inquire.presenter";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";

export default function Inquire() {
  const { navigateBack } = useNavigate();

  return <InquireUI navigateBack={navigateBack} />;
}
