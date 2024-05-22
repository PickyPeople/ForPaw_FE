import React, { useRef } from "react";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotSheltersUI from "./AdoptShelters.presenter";
import { useDragHandler } from "./hooks/useDragHandler";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import useFetchSheltersData from "./hooks/useFetchSheltersData";
import { useGoogleMaps } from "./hooks/useGoogleMaps";
import useSearchShelters from "./hooks/useSearchShelters";

export default function AdpotShelters() {
  const { shelters } = useFetchSheltersData();
  const mapRef = useRef(null);

  const { searchResults, searchSuccess, searchShelters } =
    useSearchShelters(shelters);

  const {
    isMapLoaded,
    sortedShelters,
    initialLocation,
    setCurrentLocation,
    shelterLocationDetail,
    selectedShelterId,
  } = useGoogleMaps(mapRef, shelters, searchResults, searchSuccess);

  useDragHandler(isMapLoaded); // 드래그 이벤트를 처리하는 훅, 이제 상태를 직접 업데이트하지 않음

  const handleSearch = (e) => {
    if (e.target.value.trim() !== "" && e.key === "Enter") {
      searchShelters(e.target.value);
    }
  };

  const { navigateTo } = useNavigate();

  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotSheltersUI
        mapRef={mapRef}
        sortedShelters={sortedShelters}
        isMapLoaded={isMapLoaded}
        initialLocation={initialLocation}
        setCurrentLocation={setCurrentLocation}
        shelterLocationDetail={shelterLocationDetail}
        selectedShelterId={selectedShelterId}
        searchResults={searchResults}
        searchSuccess={searchSuccess}
        searchShelters={searchShelters}
        handleSearch={handleSearch}
        navigateTo={navigateTo}
      />
      <Navigation />
    </>
  );
}
