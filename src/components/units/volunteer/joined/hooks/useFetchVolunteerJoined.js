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

export default function useFetchVolunteerJoined() {
  const { volunteerInfos } = useFetchVolunteer(); // 전체적인 봉사활동 관련된 API 데이터를 가져오는 커스텀 훅
  const [pageNumber, setPageNumber] = useState(0); // 페이지 번호 상태
  const [volunteerJoinedInfos, setVolunteerJoinedInfos] = useState(
    volunteerInfos.myGroups
  ); // 초기 내 모임 값

  useEffect(() => {
    if (typeof window !== 'undefined') { //새로고침의 문제해결
      const savedPageNumber = localStorage.getItem('pageNumber');
      setPageNumber(savedPageNumber ? parseInt(savedPageNumber) : 0);

      const savedVolunteerData = localStorage.getItem('VolunteerJoinedData');
      if (savedVolunteerData) {
        setVolunteerJoinedInfos(JSON.parse(savedVolunteerData));
      }
    }
  }, [])

  const loadUpdatedVolunteerJoinedData = async() => {
    const fetchedVolunteerJoinedData = example.result.myGroups //여기에 한홍이형이 불러온 api주소를 입력해준다.
    setVolunteerJoinedInfos(prevState => [
      ...prevState,
      ...fetchedVolunteerJoinedData,
    ]);
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pageNumber', pageNumber);
      localStorage.setItem(
        `VolunteerJoinedData`,
        JSON.stringify(volunteerJoinedInfos)
      );
    }
  }, [pageNumber, volunteerJoinedInfos]);


  // const loadUpdatedVolunteerJoinedData = async () => {
  //       const volunteerJoinedInfosData =  await fetchVolunteerJoined(); //example변수
  //       const fetchVolunteerJoinedData = volunteerJoinedInfosData.result.myGroups;
  //       setVolunteerJoinedInfos(prevState => [...prevState, ...fetchVolunteerJoinedData]);
  // };

  return { volunteerJoinedInfos, loadUpdatedVolunteerJoinedData };
}
