import { useState } from "react";

export const useSuseSortSelection = () => {
  const [sort, setSort] = useState("date");

  // 각 메뉴 클릭 시 실행될 핸들러들
  const handleDateClick = () => setSort("date");
  const handleDogsClick = () => setSort("dogs");
  const handleCatsClick = () => setSort("cats");
  const handleOthersClick = () => setSort("others");

  return {
    sort,
    handleDateClick,
    handleDogsClick,
    handleCatsClick,
    handleOthersClick,
  };
};
