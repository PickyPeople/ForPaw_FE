//여기서 volunteerInfos를 가져와서 그 안에 있는 myGroup을 가져오는 것으로 해볼까??
import { useState, useEffect } from "react";
import useFetchVolunteer from "../../hooks/useFetchVolunteer";
import { fetchVolunteerJoined } from "../VolunteerJoined.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    myGroups: [
      {
        id: 17,
        name: "강아지 사랑",
        description: "강사모입니다!",
        participation: 20,
        category: "봉사",
        district: "수성구",
        subDistrict: "두산동",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 18,
      },
      {
        id: 18,
        name: "강아지 사랑2",
        description: "강사모2입니다!",
        participation: 21,
        category: "봉사",
        district: "수성구",
        subDistrict: "두산동",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 20,
      },
    ],
  },
};

export default function useFetchVolunteerJoined(sort, page) {
  const { volunteerInfos } = useFetchVolunteer(); //전체적인 봉사활동 관련된 api문서를 다 불러옴
  const [volunteerJoinedInfos, setVolunteerJoinedInfos] = useState(
    volunteerInfos.myGroups
  ); //초기 내모임 값

  useEffect(() => { //초기값을 localstorage로 주는 기능
    localStorage.setItem(`${sort}Page`, page);
    localStorage.setItem(
      `VolunteerJoinedData_${sort}`,
      JSON.stringify(volunteerJoinedInfos)
    );
  }, [])

  useEffect(() => {
    const localVolunteerJoinedData = getLocalVolunteerJoinedData(sort);

    if (localVolunteerJoinedData.lenght === 1) {
      loadUpdatedVolunteerJoinedData();
    } else {
      setVolunteerJoinedInfos(localVolunteerJoinedData);
    }
  }, []);

  const getLocalVolunteerJoinedData = (sort) => {
    const storedVolunteerJoined = localStorage.getItem(
      `VolunteerJoinedData_${sort}`
    );
    return storedVolunteerJoined ? JSON.parse(storedVolunteerJoined) : [];
  };

  const getPageNumber = (sort) => {
    return parseInt(localStorage.getItem(`${sort}Page`), 10) || 0;
  };

  const setPageNumber = (sort, page) => {
    localStorage.setItem(`${sort}Page`, page.toString());
  };

  const loadUpdatedVolunteerJoinedData = async () => {
    const page = getPageNumber(sort);
    const localVolunteerJoinedData = getLocalVolunteerJoinedData(sort);

    const fetchVolunteerJoinedData = example.result.myGroups;

    setVolunteerJoinedInfos((prevState) => [
      ...prevState,
      ...fetchVolunteerJoinedData,
    ]);
    setPageNumber(sort, page + 1);
    localStorage.setItem(
      `VolunteerJoinedData_${sort}`,
      JSON.stringify(localVolunteerJoinedData)
    );
  };

  // const loadUpdatedVolunteerJoinedData = async () => {
  //       const volunteerJoinedInfosData =  await fetchVolunteerJoined(); //example변수
  //       const fetchVolunteerJoinedData = volunteerJoinedInfosData.result.myGroups;
  //       setVolunteerJoinedInfos(prevState => [...prevState, ...fetchVolunteerJoinedData]);
  // };

  return { volunteerJoinedInfos, loadUpdatedVolunteerJoinedData };
}
