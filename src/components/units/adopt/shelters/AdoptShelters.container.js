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
  // shelters 배열이 비어 있지 않다면 첫 번째 쉘터를 중심으로 설정, 그렇지 않다면 기본 위치 사용
  const mapOptions =
    shelters.length > 0
      ? {
          center: { lat: shelters[0].lat, lng: shelters[0].lng },
          zoom: 15,
        }
      : {
          center: { lat: -34.397, lng: 150.644 }, // 기본값 예시
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
