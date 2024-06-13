import { useState } from "react";
import { fetchInquiries } from "../Inquiries.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    inquiries: [
      {
        inquiryId: "11",
        inquiryDate: "2024-04-01T13:45:00Z",
        userNickName: "호얘이",
        type: "입양 문의",
        subject: "입양 절차 문의",
        status: "PROCESSED",
      },
      {
        inquiryId: "12",
        inquiryDate: "2024-04-01T13:45:00Z",
        userNickName: "호얘이2",
        type: "기타",
        subject: "삭제한 게시글 복구 요청",
        status: "PROCESSING",
      },
    ],
  },
};

export default function useFetchInquiries() {
  const [inquiriesInfos, setInquiriesInfos] = useState(
    example.result.inquiries
  );

  return {
    inquiriesInfos,
  };
}
