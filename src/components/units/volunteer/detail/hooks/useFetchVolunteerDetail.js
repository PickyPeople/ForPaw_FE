import { useEffect, useState } from "react";
import { fetchVolunteerDetail } from "../VolunteerDetail.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    profileURL: "/images/volunteer/volunteerDetail/volunteer_main_image.svg",
    name: "대구 동물 사랑 협회",
    description: "동물을 사랑하는 모임입니다!",
    notices: [
      {
        id: 23,
        name: "이한홍",
        date: "2023-03-28T14:30",
        title: "다음주에는 1주년 행사가 있습니다~",
        isRead: true
      },
      {
        id: 24,
        name: "이한홍",
        date: "2023-04-23T14:30",
        title: "다음주 봉사활동 일정이 변경되었습니다.",
        isRead: false
      }
    ],
    meetings: [
      {
        id: 23,
        name: "5차 동물 사랑 봉사",
        date: "2023-03-28T14:30",
        location: "범어역 1번 출구",
        cost: 15000,
        participantCnt: 7,
        maxNum: 15,
        profileURL: "/images/volunteer/volunteerDetail/meeting_detail_main.svg",
        description: "동물을 사랑하는 사람들의 봉사 활동입니다~",
        participants: [
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" }
        ]
      },
      {
        id: 24,
        name: "6차 동물 사랑 봉사",
        date: "2023-04-28T14:30",
        location: "범어역 1번 출구",
        cost: 15000,
        participantCnt: 3,
        maxNum: 15,
        profileURL: "/images/volunteer/volunteerDetail/meeting_detail_main.svg",
        description: "동물을 사랑하는 사람들의 봉사 활동입니다~",
        participants: [
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" }
        ]
      }
    ],
    members: [
      {
        id: 15,
        name: "이한홍",
        role: "ADMIN",
        profileURL: "/images/volunteer/volunteerDetail/member_icon.svg"
      },
      {
        id: 16,
        name: "탁호영",
        role: "USER",
        profileURL: "/images/volunteer/volunteerDetail/member_icon.svg"
      }
    ]
  },
};

export default function useFetchVolunteerDetail() {
  const [volunteerDetails, setVolunteerDetails] = useState(example.result);

  useEffect(() => {
    async function loadVolunteerDetail() {
      const volunteerData = await fetchVolunteerDetail();
      setVolunteerDetails(volunteerData);
    }

    //loadVolunteerDetail()
  }, []);

  return{ volunteerDetails }
}