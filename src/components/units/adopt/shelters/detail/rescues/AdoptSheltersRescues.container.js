import Navigation from "../../../../../commons/navigation/Navigation.container";
import AdoptSheltersHandler from "../../AdoptSheltersHandler.container";
import AdpotSheltersRescuesUI from "./AdoptSheltersRescues.presenter";
import { useSuseSortSelection } from "../../../../../../../src/components/commons/hooks/useSortSelection";
import { useNavigate } from "../../../../../../../src/components/commons/hooks/useNavigate";

export default function AdpotSheltersRescues() {
  const {
    sort,
    handleDateClick,
    handleDogsClick,
    handleCatsClick,
    handleOthersClick,
  } = useSuseSortSelection();
  const { navigateTo } = useNavigate();

  return (
    <>
      <AdoptSheltersHandler />
      <AdpotSheltersRescuesUI
        sort={sort}
        handleDateClick={handleDateClick}
        handleDogsClick={handleDogsClick}
        handleCatsClick={handleCatsClick}
        handleOthersClick={handleOthersClick}
        navigateTo={navigateTo}
      />
      <Navigation />
    </>
  );
}
