import { useState } from "react";

export const useSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleSide };
};
