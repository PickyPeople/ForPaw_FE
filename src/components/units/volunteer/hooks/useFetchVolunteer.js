import { useEffect, useState } from "react";
import { fetchVolunteer } from "../Volunteer.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    recommandGroups: [
      {
        id: 15,
        name: "고양이 사랑",
        description: "지금부터 우리한번 끔직한 시간을 가져볼려고 합니다 정말로 힘든 시간의 연속이 되어가겠군요 줄바꿈이 잘되어 있으면 정말 감사할 것 같습니다",
        participation: 12,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 44,
      },
      {
        id: 16,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 17,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 18,
      },
    ],
    newGroups: [
      {
        id: 23,
        name: "동물 사랑 협회",
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_new.svg",
      },
      {
        id: 24,
        name: "동물 사랑 협회2",
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_new.svg",
      },
    ],
    localGroups: [
      {
        id: 15,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 15,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 18,
      },
      {
        id: 16,
        name: "고양이 사랑2",
        description: "집사들의 모임입니다! 고양이를 사랑하시는 집사분들! 길거리의 고양이를 위해서 같이 봉사를 해보고자 하는 마음으로 만든 봉사입니다",
        participation: 12,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 12,
      },
      {
        id: 17,
        name: "강아지 사랑1",
        description: "집사들의 모임입니다!",
        participation: 12,
        category: "봉사",
        region: "부산 광역시",
        subRegion: "금정구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 20,
      },
      {
        id: 18,
        name: "강아지 사랑2",
        description: "집사들의 모임입니다!",
        participation: 17,
        category: "봉사",
        region: "부산 광역시",
        subRegion: "동래구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 53,
      },
    ],
    myGroups: [
      {
        id: 15,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 18,
      },
      {
        id: 16,
        name: "고양이 사랑2",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 20,
      },
    ],
  },
};

export default function useFetchVolunteer() {
  const [volunteerInfos, setVolunteerInfos] = useState(example.result);
  useEffect(() => {
    async function loadVolunteer() {
      const volunteerInfosData = await fetchVolunteer();
      setVolunteerInfos(volunteerInfosData);
    }

    //loadRegularMeetings()
  }, []);
  return { volunteerInfos };
}
