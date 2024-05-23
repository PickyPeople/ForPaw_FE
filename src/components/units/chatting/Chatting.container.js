import Headers from "../../commons/headers/Headers.container";
import Navigation from "../../commons/navigation/Navigation.container";
import ChattingUI from "./Chatting.presenter";
import useFetchChatRoomList from "./hook/useFetchChatRoomList";

export default function Chatting() {
  const { chatRoomList } = useFetchChatRoomList();

  function truncateString(name, maxLength) {
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name;
  }

  return (
    <>
      <Headers />
      <ChattingUI chatRoomList={chatRoomList} truncateString={truncateString} />
      <Navigation />
    </>
  );
}
