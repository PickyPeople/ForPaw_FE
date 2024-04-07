import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityAdoptionUI from "./CommunityAdoption.presenter";

export default function CommunityAdoption() {
  const { navigateTo } = useNavigate();

  return (
    <>
      <Headers />
      <CommunityHandler />
      <CommunityAdoptionUI navigateTo={navigateTo} />
      <Navigation />
    </>
  );
}
