import React, { useRef } from "react";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotSheltersUI from "./AdoptShelters.presenter";
import { useDragHandler } from "./hooks/useDragHandler";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import useFetchSheltersData from "./hooks/useFetchSheltersData";
import { useGoogleMaps } from "./hooks/useGoogleMaps";

export default function AdpotShelters() {
  const { shelters } = useFetchSheltersData();
  const mapRef = useRef(null);
  const mapOptions = {
    center: { lat: shelters[0].lat, lng: shelters[0].lng },
    zoom: 15,
  };
  useGoogleMaps(mapRef, mapOptions, shelters);
  useDragHandler(); // 드래그 이벤트를 처리하는 훅, 이제 상태를 직접 업데이트하지 않음
  const { navigateTo } = useNavigate();

  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotSheltersUI
        mapRef={mapRef}
        shelters={shelters}
        navigateTo={navigateTo}
      />
      <Navigation />
    </>
  );
}
