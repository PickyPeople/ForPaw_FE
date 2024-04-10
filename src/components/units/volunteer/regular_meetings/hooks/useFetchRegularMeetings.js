import { useEffect, useState } from "react";
import { fetchRegularMeetings } from "../Regular_Meetings.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    meetings: [
      {
        id: 23,
        date: "2/12 (월)",
        leftDay: 1,
        name: "5차 동물 사랑 봉사",
        detailDate: "2/12 (월) 오전 11:00",
        location: "범어사역 1번 출구",
        cost: 15000 + "원",
        participantCnt: 7,
        maxNum: 15,
        profileURL: "/images/volunteer/volunteerDetail/meeting_detail_main.svg",
        description: "동물을 사랑하는 사람들의 봉사 활동입니다~",
        participants: [
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
        ],
      },
      {
        id: 24,
        date: "2/12 (월)",
        leftDay: 1,
        name: "6차 동물 사랑 봉사",
        detailDate: "2/12 (월) 오전 11:00",
        location: "범어사역 1번 출구",
        cost: 15000 + "원",
        participantCnt: 3,
        maxNum: 15,
        profileURL: "/images/volunteer/volunteerDetail/meeting_detail_main.svg",
        description: "동물을 사랑하는 사람들의 봉사 활동입니다~",
        participants: [
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
        ],
      },
    ],
  },
};

export default function useFetchRegularMeetings() {
  const [regularMeetingsInfos, setRegularMeetingsInfos] = useState(
    example.result
  );
  useEffect(() => {
    async function loadRegularMeetings() {
      const regularMeetingsInfosData = await fetchRegularMeetings();
      setRegularMeetingsInfos(regularMeetingsInfosData);
    }

    //loadRegularMeetings()
  }, []);
  return { regularMeetingsInfos };
}
