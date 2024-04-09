import { useEffect, useRef, useState } from "react";

export const useCategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState("말머리 선택");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isCategoryFocused, setIsCategoryFocused] = useState(false);
  const categories = ["입양스토리", "임시보호 스토리", "궁금해요"];
  const wrapperRef = useRef(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsCategoryFocused(!isCategoryFocused);
  };

  const categoryToggleDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsCategoryFocused(!isCategoryFocused);
  };

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // 모든 드랍다운을 닫는 로직
        setIsCategoryDropdownOpen(false);
        setIsCategoryFocused(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // 빈 배열을 넘겨 컴포넌트 마운트 시에만 실행되도록 함

  return {
    wrapperRef,
    categories,
    selectedCategory,
    isCategoryFocused,
    isCategoryDropdownOpen,
    handleCategorySelect,
    categoryToggleDropdown,
  };
};
