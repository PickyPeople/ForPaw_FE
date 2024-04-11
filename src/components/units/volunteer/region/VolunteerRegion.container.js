import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRegionUI from "./VolunteerRegion.presenter";
import useFetchVolunteer from "../hooks/useFetchVolunteer";

export default function VolunteerRegion() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const { volunteerInfos } = useFetchVolunteer();

  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerRegionUI
        navigateTo={navigateTo}
        volunteerInfos={volunteerInfos}
      />
      <Navigation />
    </>
  );
}
