import RegularMeetingsUI from "./Regular_Meetings.presenter";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useRouter } from "next/router";
import useFetchVolunteerDetail from "../detail/hooks/useFetchVolunteerDetail";

export default function RegularMeetings() {
  const router = useRouter();
  const navigateTo = (path) => () => router.push(path);

  const status = router.query.name;

  const { volunteerDetailInfos } = useFetchVolunteerDetail();

  return (
    <>
      <Headers />
      <RegularMeetingsUI
        navigateTo={navigateTo}
        volunteerDetailInfos={volunteerDetailInfos}
        status={status}
      />
      <Navigation />
    </>
  );
}
