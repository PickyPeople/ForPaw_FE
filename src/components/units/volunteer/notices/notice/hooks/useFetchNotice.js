import { useEffect, useState } from "react";
import { fetchNotice } from "../Notice.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    name: "호얘이",
    title: "공지사항 타이틀을 입력해주세요 최대 두줄 정도로 넘으면..처리",
    content:
      "소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸 이라는 걸 알 수 있었다. 그런데, 어제까지는 개울 기슭에서 하더니, 오늘은 징검다리 한가운데 앉아서 하고 있다. 소녀는 소년이 개울둑에 앉아 있는 걸 아는지 모르는지",
    date: "2023-03-28T14:30",
    commnetNum: 3,
    likeNum: 5,
    images: [
      {
        id: 13,
        imageURL: "/images/volunteer/announcement/announcement_img.svg",
      },
      {
        id: 14,
        imageURL: "/images/volunteer/announcement/announcement_img.svg",
      },
    ],
    comments: [
      {
        id: 23,
        name: "김동영",
        content: "축하드립니다~",
        date: "2023-04-28T14:30",
        location: "금정구",
        replies: [
          {
            id: 31,
            name: "홍길동",
            content: "정말 좋네요!",
            date: "2023-04-29T15:00",
            location: "부산진구",
          },
          {
            id: 32,
            name: "김철수",
            content: "어떤 절차를 거치나요?",
            date: "2023-04-29T16:00",
            location: "해운대구",
          },
        ],
      },
      {
        id: 24,
        name: "이상명",
        content: "귀여워요!",
        date: "2023-04-29T14:30",
        location: "금정구",
        replies: [],
      },
    ],
  },
};

export default function useFetchNotice() {
  const [noticeInfos, setNoticeInfos] = useState(example.result);
  useEffect(() => {
    async function loadNotice() {
      const noticeData = await fetchNotice();
      setNoticeInfos(noticeData);
    }

    //loadNotice()
  }, [noticeInfos]);
  return { noticeInfos };
}
