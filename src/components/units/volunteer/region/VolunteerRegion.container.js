import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRegionUI from "./VolunteerRegion.presenter";
import useFetchVolunteerNewGrouop from "./hooks/useFetchVolunteerNewGroup";
import useFetchVolunteerRegion from "./hooks/useFetchVolunteerRegion";

export default function VolunteerRegion() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const { volunteerNewGroupInfos, loadUpdatedVolunteerNewGroupData } =
    useFetchVolunteerNewGrouop();
  const { volunteerRegionInfos, loadUpdatedVolunteerRegionData } =
    useFetchVolunteerRegion();
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
      />
      <Navigation />
    </>
  );
}
