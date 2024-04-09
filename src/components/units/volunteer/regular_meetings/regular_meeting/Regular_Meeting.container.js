import Header from "../../../../commons/headers/Headers.container";
import RegularMeetingUI from "./Regular_Meeting.presenter";

export default function RegularMeeting() {
  const example = {
    success: true,
    code: 200,
    message: "ok",
    result: {
      id: 23,
      name: "5차 동물 사랑 봉사",
      date: "2023-03-28T14:30",
      location: "범어역 1번 출구",
      cost: 15000 + "원",
      participantNum: 7,
      maxNum: 15,
      profileURL: "/images/volunteer/regular_meeting/meeting_main_img.svg",
      description: (
        <>
          계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도
          없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을
          이제 다 못 헤는 것은 쉬이 아 침이 오는 까닭이요, 내일 밤이 남은
          까닭이요.
        </>
      ),
      participants: [
        { profileURL: "https://s3.1xxx.xx.com" },
        { profileURL: "https://s3.2xxx.xx.com" },
        { profileURL: "https://s3.3xxx.xx.com" },
      ],
    },
  };
  return (
    <>
      <Header />
      <RegularMeetingUI example={example} />
    </>
  );
}
