import AdoptPetDetailUI from "./AdoptPetDetail.presenter";
import { useNavigate } from "../../../commons/hooks/useNavigate";
import useFetchPetDetail from "./hooks/useFetchPetDetail";

export default function AdoptPetDetail() {
  const { petDetail } = useFetchPetDetail();
  const { navigateTo, navigateBack } = useNavigate();

  return (
    <AdoptPetDetailUI
      petDetail={petDetail}
      navigateTo={navigateTo}
      navigateBack={navigateBack}
    />
  );
}
