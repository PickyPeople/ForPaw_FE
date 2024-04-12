import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotPetsUI from "./AdoptPets.presenter";
import useFetchPetsData from "./hooks/useFetchPetsData";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import { useSuseSortSelection } from "../../../../../src/components/commons/hooks/useSortSelection";
import React, { useRef, useEffect } from "react";
import { useLoginStatusCheck } from "../../../../../src/components/commons/hooks/useLoginStatusCheck";
import useModalStore from "../../../../../src/store/useModalStore";

export default function AdpotPets() {
  const { isLoggedIn } = useLoginStatusCheck();
  const { openModal } = useModalStore();
  const {
    sort,
    handleDateClick,
    handleDogsClick,
    handleCatsClick,
    handleOthersClick,
  } = useSuseSortSelection();
  const { pets, handleToggleLike, loadPetsData } = useFetchPetsData(sort);
  const { navigateTo } = useNavigate();

  const handleToggleClick = (petId) => {
    if (!isLoggedIn) {
      openModal(); // 로그인 경로를 전달
    } else {
      handleToggleLike(petId);
    }
  };

  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotPetsUI
        sort={sort}
        loadPetsData={loadPetsData}
        handleDateClick={handleDateClick}
        handleDogsClick={handleDogsClick}
        handleCatsClick={handleCatsClick}
        handleOthersClick={handleOthersClick}
        pets={pets}
        handleToggleClick={handleToggleClick}
        navigateTo={navigateTo}
      />
      <Navigation />
    </>
  );
}
