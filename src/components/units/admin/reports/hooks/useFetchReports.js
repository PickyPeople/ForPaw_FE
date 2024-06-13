import { useState } from "react";
import { fetchReports } from "../Reports.queries";

const example = {
  success: true,
  code: 200,
  message: "OK",
  result: {
    reports: [
      {
        id: 101,
        reportDate: "2024-04-01T13:45:00Z",
        contentType: "POST",
        contentId: "12",
        reportType: "PROFANITY",
        reason: "욕설을 사용함.",
        reporterNickName: "호얘이",
        reportedId: 252,
        reportedNickName: "user1234",
        status: "PORCESSING",
      },
      {
        id: 102,
        reportDate: "2024-04-01T15:00:00Z",
        contentType: "COMMENT",
        contentId: "34",
        reportType: "COMMERCIAL_ADVERTISING",
        reason: "불필요한 상업 광고를 포함함.",
        reporterNickName: "호얘이",
        reportedId: 12,
        reportedNickName: "user53",
        status: "PROCESSED",
      },
    ],
  },
};

export default function useFetchReports() {
  const [reportInfos, setReportInfos] = useState(example.result.reports);

  return{
    reportInfos
  }
}
