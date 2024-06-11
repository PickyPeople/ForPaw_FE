import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRecommendUI from "./VolunteerRecommend.presenter";
import { useRouter } from "next/router";
import useFetchVolunteerRecommend from "./hooks/useFetchVolunteerRecommend";
import { useLoginStatusCheck } from "../../../commons/hooks/useLoginStatusCheck";
import useModalStore from "../../../../store/useModalStore";

export default function VolunteerRecommend() {
  const router = useRouter();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore()

  const navigateTo = (path) => () => router.push(path);

  const { volunteerRecommendInfos, handleToggleLike } = useFetchVolunteerRecommend();

  const handleToggleClick = (volunteerRecommendId) => {
    if (!isLoggedIn) {
      openModal();
    } else {
      handleToggleLike(volunteerRecommendId);
    }
  }

  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerRecommendUI
        navigateTo={navigateTo}
        volunteerRecommendInfos={volunteerRecommendInfos}
        handleToggleClick={handleToggleClick}
      />
      <Navigation />
    </>
  );
}
