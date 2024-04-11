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
        participation: 9,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 18,
      },
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
    ],
    newGroups: [
      {
        id: 23,
        name: "동물 사랑 협회",
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "https://s3.xxxx.xx.com",
      },
      {
        id: 24,
        name: "동물 사랑 협회2",
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "https://s3.xxxx.xx.com",
      },
    ],
    localGroups: [
      {
        id: 15,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        region: "대구 광역시",
        subRegion: "수성구",
        profileURL: "https://s3.xxxx.xx.com",
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
        profileURL: "https://s3.xxxx.xx.com",
        likeNum: 20,
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
