import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { useCurrentLocation } from "./useCurrentLocation";
import useSortedShelters from "./useSortedShelters";
import useGoogleMapsScript from "./useGoogleMapsScript";
import useUpdateMarkers from "./useUpdateMarkers";

export const useGoogleMaps = (
  ref,
  shelters,
  searchResults = [],
  searchSuccess = false
) => {
  const router = useRouter();
  const mapRef = useRef(null);
  const currentCenter = useRef({ lat: null, lng: null });
  const markersRef = useRef([]);
  const [initialLocation, setInitialLocation] = useState({
    lat: 35.234,
    lng: 129.0807,
  });
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [selectedShelterId, setSelectedShelterId] = useState(null);
  const { location: userLocation, locationLoaded } = useCurrentLocation();
  const sortedShelters = useSortedShelters(
    shelters,
    userLocation.lat,
    userLocation.lng
  );
  const [sheltersToDisplay, setSheltersToDisplay] = useState(sortedShelters);

  useEffect(() => {
    if (userLocation.lat && userLocation.lng) {
      console.log(userLocation);
      setInitialLocation(userLocation);
    }
  }, [userLocation]);

  useEffect(() => {
    if (searchSuccess) {
      setSheltersToDisplay(searchResults);
    } else {
      setSheltersToDisplay(sortedShelters);
    }
  }, [searchSuccess, searchResults, sortedShelters]);

  useGoogleMapsScript(() => {
    if (!locationLoaded) return;

    if (window.google && ref.current) {
      if (!mapRef.current) {
        mapRef.current = new window.google.maps.Map(ref.current, {
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          center: initialLocation,
          zoom: 15,
        });
        setIsMapLoaded(true);

        new window.google.maps.Marker({
          position: initialLocation,
          map: mapRef.current,
          title: "Initial Location",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#4285F4", // 파란색
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#ffffff",
          },
        });
      } else {
        mapRef.current.setCenter(
          new google.maps.LatLng(initialLocation.lat, initialLocation.lng)
        );
      }
    }
  });

  const setCurrentLocation = (location) => {
    if (!isMapLoaded) return;

    setSelectedShelterId(location.id); // 선택된 보호소 ID 업데이트

    // 선택된 보호소 요소로 스크롤
    let selectedShelterElement = document.querySelector(
      `[data-id="${location.id}"]`
    );

    // 선택된 보호소 요소가 없을 경우 첫 번째 보호소로 스크롤
    if (!selectedShelterElement) {
      selectedShelterElement = document.querySelector(
        `[data-id="${sheltersToDisplay[0].id}"]`
      );
    }

    if (selectedShelterElement) {
      selectedShelterElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // 상태가 업데이트된 후에 중앙으로 이동
    setTimeout(() => {
      mapRef.current.panTo(new google.maps.LatLng(location.lat, location.lng));
      mapRef.current.setZoom(15);
    }, 0);
  };

  const shelterLocationDetail = (shelter) => {
    const mapCenter = mapRef.current.getCenter();
    currentCenter.current = { lat: mapCenter.lat(), lng: mapCenter.lng() };

    if (
      currentCenter.current.lat.toFixed(5) === shelter.lat.toFixed(5) &&
      currentCenter.current.lng.toFixed(5) === shelter.lng.toFixed(5)
    ) {
      router.push("/adopt/shelters/detail");
    } else {
      setCurrentLocation(shelter);
    }
  };

  useUpdateMarkers(
    mapRef.current,
    sheltersToDisplay,
    markersRef,
    userLocation,
    setCurrentLocation,
    selectedShelterId // 선택된 보호소 ID 전달
  );

  useEffect(() => {
    if (searchSuccess && searchResults.length > 0) {
      shelterLocationDetail(searchResults[0]);
    } else if (!searchSuccess) {
      setCurrentLocation(initialLocation);
    }
  }, [searchSuccess, searchResults, initialLocation]);

  return {
    isMapLoaded,
    sortedShelters,
    initialLocation,
    setCurrentLocation,
    shelterLocationDetail,
    selectedShelterId, // 선택된 보호소 ID 반환
    sheltersToDisplay, // 상태로 관리되는 sheltersToDisplay 반환
  };
};
