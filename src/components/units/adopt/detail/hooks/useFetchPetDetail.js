import { useEffect, useState } from "react";
import { fetchPetDetail } from "../AdoptPetDetail.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    id: 24,
    name: "메롱이",
    age: "2024(60일미만)(년생)",
    gender: "M",
    specialMark: "활발함",
    region: "대구광역시 수성구",
    isLike: true,
    profileURL: "https://s3.xxxx.xx.com",
    happenPlace: "경산시 1645-9 통나무 펜션",
    kind: "[개] 진도견",
    color: "흰색",
    weight: "20(Kg)",
    noticeSdt: "20240224",
    noticeEdt: "20240305",
    processState: "보호중",
    neuter: "N",
  },
};

export default function useFetchPetDetail() {
  const [petDetail, setPetDetail] = useState(example.result);

  useEffect(() => {
    async function loadPetDetail() {
      const petData = await fetchPetDetail();
      setPetDetail(petData);
    }

    // loadPetDetail();
  }, []);

  return { petDetail };
}
