import { useState } from "react";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailUI from "./ChattingDetail.presenter";
import { useSideMenu } from "./hook/useSideMenu";

export default function ChattingDetail() {
  const { navigateTo, navigateBack } = useNavigate();
  const { isOpen, toggleSide } = useSideMenu();

  https: return (
    <>
      <ChattingDetailUI
        isOpen={isOpen}
        toggleSide={toggleSide}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
    </>
  );
}
