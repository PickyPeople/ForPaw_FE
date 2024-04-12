import AdoptPetDetailUI from "./AdoptPetDetail.presenter";
import { useNavigate } from "../../../commons/hooks/useNavigate";
import useFetchPetDetail from "./hooks/useFetchPetDetail";
import { useLoginStatusCheck } from "../../../../../src/components/commons/hooks/useLoginStatusCheck";
import useModalStore from "../../../../../src/store/useModalStore";
import { useRouter } from "next/router";

export default function AdoptPetDetail() {
  const router = useRouter();
  const { petDetail, handleToggleLike } = useFetchPetDetail();
  const { navigateTo, navigateBack } = useNavigate();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();

  const handleToggleClick = (petId) => {
    if (!isLoggedIn) {
      openModal(); // 로그인 경로를 전달
    } else {
      handleToggleLike(petId);
    }
  };

  const handleAdoptionClick = (path) => {
    if (!isLoggedIn) {
      openModal(); // 로그인 경로를 전달
    } else {
      router.push(path);
    }
  };

  return (
    <AdoptPetDetailUI
      petDetail={petDetail}
      navigateTo={navigateTo}
      navigateBack={navigateBack}
      handleToggleClick={handleToggleClick}
      handleAdoptionClick={handleAdoptionClick}
    />
  );
}
