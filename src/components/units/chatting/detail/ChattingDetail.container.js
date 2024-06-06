import { useEffect, useState } from "react";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailUI from "./ChattingDetail.presenter";
import useFetchChatMsgList from "./hook/useFetchChatMsgList";
import useScrollToBottom from "./hook/useScrollToBottom";
import { useSearchSideMenu } from "./hook/useSearchSideMenu";

export default function ChattingDetail() {
  const { chatMsgList, handleChange, handleSend } = useFetchChatMsgList();
  const scrollRef = useScrollToBottom(chatMsgList);
  const { isSearchOpen, toggleSearch, isSideMenuOpen, toggleSideMenu } =
    useSearchSideMenu();
  const { navigateTo, navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailUI
        chatMsgList={chatMsgList}
        handleChange={handleChange}
        handleSend={handleSend}
        scrollRef={scrollRef}
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
        isSideMenuOpen={isSideMenuOpen}
        toggleSideMenu={toggleSideMenu}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
    </>
  );
}
