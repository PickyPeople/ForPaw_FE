import React from "react";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotSheltersUI from "./AdoptShelters.presenter";
import { useDragHandler } from "./hooks/useDragHandler";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import useFetchSheltersData from "./hooks/useFetchSheltersData";

export default function AdpotShelters() {
  const { shelters } = useFetchSheltersData();
  const { topPosition, topIconPosition } = useDragHandler();
  const { navigateTo } = useNavigate();

  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotSheltersUI
        shelters={shelters}
        topPosition={topPosition}
        topIconPosition={topIconPosition}
        navigateTo={navigateTo}
      />
      <Navigation />
    </>
  );
}
