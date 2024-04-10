import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useCategorySelection = () => {
  const router = useRouter();
  const { type } = router.query; // 쿼리 파라미터에서 type 추출
  const [title, setTitle] = useState("게시글 등록");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // 쿼리 파라미터에 따라 category 상태 설정
    if (type === "adoption") setCategory("입양 스토리");
    else if (type === "fostering") setCategory("임시보호 스토리");
    else if (type === "questions") {
      setCategory("궁금해요");
      setTitle("질문하기");
    }
  }, [type]);

  return {
    title,
    category,
  };
};
