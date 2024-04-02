import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotFavoritesUI from "./AdoptFavorites.presenter";
import useFetchFavPetsData from "./hooks/useFetchFavPetsData";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";

export default function AdpotFavorites() {
  const { favPets, handleToggleLike } = useFetchFavPetsData();
  const { navigateTo } = useNavigate();

  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotFavoritesUI
        navigateTo={navigateTo}
        favPets={favPets}
        handleToggleLike={handleToggleLike}
      />
      <Navigation />
    </>
  );
}
