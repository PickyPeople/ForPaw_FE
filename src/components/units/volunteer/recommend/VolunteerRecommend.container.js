import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRecommendUI from "./VolunteerRecommend.presenter";
import { useRouter } from "next/router";
import useFetchVolunteer from "../hooks/useFetchVolunteer";

export default function VolunteerRecommend() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const { volunteerInfos } = useFetchVolunteer();

  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerRecommendUI
        navigateTo={navigateTo}
        volunteerInfos={volunteerInfos}
      />
      <Navigation />
    </>
  );
}
