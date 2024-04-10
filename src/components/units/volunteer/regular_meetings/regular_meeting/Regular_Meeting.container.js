import Header from "../../../../commons/headers/Headers.container";
import RegularMeetingUI from "./Regular_Meeting.presenter";
import useFetchRegularMeeting from "./hooks/useFetchRegularMeeting";

export default function RegularMeeting() {
  const {regularMeetingInfos} = useFetchRegularMeeting();
  return (
    <>
      <Header />
      <RegularMeetingUI regularMeetingInfos={regularMeetingInfos} />
    </>
  );
}
