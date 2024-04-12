import { useEffect, useState } from "react";
import { fetchPetDetail } from "../AdoptPetDetail.queries";
import { useToggleLike } from "../../../../../../src/components/commons/hooks/useToggleLike";

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
  const { toggle } = useToggleLike();

  useEffect(() => {
    async function loadPetDetail() {
      const petData = await fetchPetDetail();
      setPetDetail(petData);
    }

    // loadPetDetail();
  }, []);

  // '좋아요' 토글을 처리하는 함수
  const handleToggleLike = async () => {
    const isSuccess = await toggle(petDetail.id);
    if (isSuccess) {
      // 토글이 성공하면 'isLike' 상태를 반전
      setPetDetail((currentDetail) => ({
        ...currentDetail,
        isLike: !currentDetail.isLike,
      }));
    }
  };

  return { petDetail, handleToggleLike };
}
