import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailUI from "./ChattingDetail.presenter";
import useFetchChatMsgList from "./hook/useFetchChatMsgList";
import { useSearchSideMenu } from "./hook/useSearchSideMenu";

export default function ChattingDetail() {
  const { chatMsgList } = useFetchChatMsgList();
  const { isSearchOpen, toggleSearch, isSideMenuOpen, toggleSideMenu } =
    useSearchSideMenu();
  const { navigateTo, navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailUI
        chatMsgList={chatMsgList}
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
