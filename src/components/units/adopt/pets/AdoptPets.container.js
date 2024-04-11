import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotPetsUI from "./AdoptPets.presenter";
import useFetchPetsData from "./hooks/useFetchPetsData";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import { useSuseSortSelection } from "../../../../../src/components/commons/hooks/useSortSelection";

export default function AdpotPets() {
  const {
    sort,
    handleDateClick,
    handleDogsClick,
    handleCatsClick,
    handleOthersClick,
  } = useSuseSortSelection();
  const { pets, handleToggleLike } = useFetchPetsData(sort);
  const { navigateTo } = useNavigate();

  console.log(sort);

  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotPetsUI
        sort={sort}
        handleDateClick={handleDateClick}
        handleDogsClick={handleDogsClick}
        handleCatsClick={handleCatsClick}
        handleOthersClick={handleOthersClick}
        pets={pets}
        handleToggleLike={handleToggleLike}
        navigateTo={navigateTo}
      />
      <Navigation />
    </>
  );
}
