import Headers from "../../commons/headers/Headers.container";
import Navigation from "../../commons/navigation/Navigation.container";
import ChattingUI from "./Chatting.presenter";
import useFetchChattingList from "./hook/useFetchChattingList";

export default function Chatting() {
  const { chattingList } = useFetchChattingList();

  function truncateString(name, maxLength) {
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name;
  }

  return (
    <>
      <Headers />
      <ChattingUI chattingList={chattingList} truncateString={truncateString} />
      <Navigation />
    </>
  );
}
