import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotPetsUI from "./AdoptPets.presenter";
import useFetchPetsData from "./hooks/useFetchPetsData";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";

export default function AdpotPets() {
  const { pets, handleToggleLike } = useFetchPetsData();
  const { navigateTo } = useNavigate();

  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotPetsUI
        navigateTo={navigateTo}
        pets={pets}
        handleToggleLike={handleToggleLike}
      />
      <Navigation />
    </>
  );
}
