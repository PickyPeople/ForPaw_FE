import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerJoinedUI from "./VolunteerJoined.presenter";
import { useRouter } from "next/router";
import useFetchVolunteer from "../hooks/useFetchVolunteer";

export default function VolunteerJoined() {
  const router = useRouter();

  const navigateTo = (path) => () => {
    router.push({
      pathname: path,
      query: {
        name: "member",
      },
    });
  };

  const { volunteerInfos } = useFetchVolunteer();

  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerJoinedUI
        navigateTo={navigateTo}
        volunteerInfos={volunteerInfos}
      />
      <Navigation />
    </>
  );
}
