import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerJoinedUI from "./VolunteerJoined.presenter";
import { useRouter } from "next/router";
import useFetchVolunteerJoined from "./hooks/useFetchVolunteerJoined";
import { useLoginStatusCheck } from "../../../commons/hooks/useLoginStatusCheck";
import useModalStore from "../../../../store/useModalStore";

export default function VolunteerJoined() {
  const router = useRouter();
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();

  const navigateTo = (path) => () => {
    router.push({
      pathname: path,
      query: {
        name: "member",
      },
    });
  };

  const { volunteerJoinedInfos, loadUpdatedVolunteerJoinedData, handleToggleLike } = useFetchVolunteerJoined();

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
      <VolunteerJoinedUI
        navigateTo={navigateTo}
        volunteerJoinedInfos={volunteerJoinedInfos}
        loadUpdatedVolunteerJoinedData={loadUpdatedVolunteerJoinedData}
        handleToggleClick={handleToggleClick}
      />
      <Navigation />
    </>
  );
}
