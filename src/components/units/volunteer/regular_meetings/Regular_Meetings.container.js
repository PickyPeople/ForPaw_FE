import RegularMeetingsUI from "./Regular_Meetings.presenter";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useRouter } from "next/router";
import useFetchRegularMeetings from "./hooks/useFetchRegularMeetings";

export default function RegularMeetings() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path); //정규모임 상세페이지 넘어가기

  const status = router.query.name; //멤버인 것을 해주기 위해서

  const { RegularMeetingsInfos } = useFetchRegularMeetings();

  return (
    <>
      <Headers />
      <RegularMeetingsUI
        navigateTo={navigateTo}
        RegularMeetingsInfos={RegularMeetingsInfos}
        status={status}
      />
      <Navigation />
    </>
  );
}
