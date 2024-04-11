import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotFavoritesUI from "./AdoptFavorites.presenter";
import useFetchFavPetsData from "./hooks/useFetchFavPetsData";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import { useSuseSortSelection } from "../../../../../src/components/commons/hooks/useSortSelection";

export default function AdpotFavorites() {
  const {
    sort,
    handleDateClick,
    handleDogsClick,
    handleCatsClick,
    handleOthersClick,
  } = useSuseSortSelection();
  const { favPets, handleToggleLike } = useFetchFavPetsData();
  const { navigateTo } = useNavigate();

  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotFavoritesUI
        sort={sort}
        handleDateClick={handleDateClick}
        handleDogsClick={handleDogsClick}
        handleCatsClick={handleCatsClick}
        handleOthersClick={handleOthersClick}
        navigateTo={navigateTo}
        favPets={favPets}
        handleToggleLike={handleToggleLike}
      />
      <Navigation />
    </>
  );
}
