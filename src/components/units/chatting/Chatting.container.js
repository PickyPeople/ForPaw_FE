import Headers from "../../commons/headers/Headers.container";
import { useNavigate } from "../../commons/hooks/useNavigate";
import { useTruncateString } from "../../commons/hooks/useTruncateString";
import Navigation from "../../commons/navigation/Navigation.container";
import ChattingUI from "./Chatting.presenter";
import useFetchChatRoomList from "./hook/useFetchChatRoomList";

export default function Chatting() {
  const { chatRoomList } = useFetchChatRoomList();
  const { navigateTo } = useNavigate();
  const { truncateString } = useTruncateString();

  return (
    <>
      <Headers />
      <ChattingUI
        chatRoomList={chatRoomList}
        truncateString={truncateString}
        navigateTo={navigateTo}
      />
      <Navigation />
    </>
  );
}
