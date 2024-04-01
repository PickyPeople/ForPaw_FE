import AdoptHandlerUI from "./AdoptHandler.presenter";
import { useNavigate } from "../../commons/hooks/useNavigate";

export default function AdoptHandler() {
  const { navigateTo, isActive } = useNavigate();

  const paths = {
    pets: "/adopt/pets",
    shelters: "/adopt/shelters",
    favorites: "/adopt/favorites",
  };

  return (
    <>
      <AdoptHandlerUI
        isActive={isActive}
        navigateTo={navigateTo}
        paths={paths}
      />
    </>
  );
}
