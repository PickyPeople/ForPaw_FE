import { useEffect, useRef } from "react";

const useScrollToBottom = (dependencies) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView();
    }
  }, dependencies);

  return elementRef;
};

export default useScrollToBottom;
