import { useEffect, useRef } from "react";

const useScrollToBottom = (dependencies) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [dependencies]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  return scrollRef;
};

export default useScrollToBottom;
