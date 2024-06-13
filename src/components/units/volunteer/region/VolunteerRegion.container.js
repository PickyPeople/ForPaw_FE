import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRegionUI from "./VolunteerRegion.presenter";
import useFetchVolunteerNewGrouop from "./hooks/useFetchVolunteerNewGroup";
import useFetchVolunteerRegion from "./hooks/useFetchVolunteerRegion";
import { useLoginStatusCheck } from "../../../commons/hooks/useLoginStatusCheck";
import useModalStore from "../../../../store/useModalStore";

export default function VolunteerRegion() {
  const router = useRouter();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();

  const navigateTo = (path) => () => router.push(path);

  const { volunteerNewGroupInfos, loadUpdatedVolunteerNewGroupData } =
    useFetchVolunteerNewGrouop();
  const { volunteerRegionInfos, loadUpdatedVolunteerRegionData, handleToggleLike } =
    useFetchVolunteerRegion();

  const handleToggleClick = (volunteerId) => {
    if (!isLoggedIn) {
      openModal();
    } else {
      handleToggleLike(volunteerId);
    }
  }

  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerRegionUI
        navigateTo={navigateTo}
        volunteerNewGroupInfos={volunteerNewGroupInfos}
        loadUpdatedVolunteerNewGroupData={loadUpdatedVolunteerNewGroupData}
        volunteerRegionInfos={volunteerRegionInfos}
        loadUpdatedVolunteerRegionData={loadUpdatedVolunteerRegionData}
        handleToggleClick={handleToggleClick}
      />
      <Navigation />
    </>
  );
}
