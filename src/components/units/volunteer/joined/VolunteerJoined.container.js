import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerJoinedUI from "./VolunteerJoined.presenter";
import { useRouter } from "next/router";
import useFetchVolunteerJoined from "./hooks/useFetchVolunteerJoined";

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
  
  const { volunteerJoinedInfos, loadUpdatedVolunteerJoinedData } = useFetchVolunteerJoined();

  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerJoinedUI
        navigateTo={navigateTo}
        volunteerJoinedInfos={volunteerJoinedInfos}
        loadUpdatedVolunteerJoinedData={loadUpdatedVolunteerJoinedData}
      />
      <Navigation />
    </>
  );
}
