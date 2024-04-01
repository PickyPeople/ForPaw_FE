import AdoptPetDetailUI from "./AdoptPetDetail.presenter";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";

export default function AdoptPetDetail() {
  const { navigateTo, navigateBack } = useNavigate();

  return (
    <AdoptPetDetailUI navigateTo={navigateTo} navigateBack={navigateBack} />
  );
}
