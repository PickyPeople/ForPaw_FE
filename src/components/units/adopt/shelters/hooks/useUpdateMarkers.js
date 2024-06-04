import { useEffect } from "react";

const useUpdateMarkers = (
  map,
  sheltersToDisplay,
  markersRef,
  userLocation,
  setCurrentLocation,
  selectedShelterId
) => {
  useEffect(() => {
    if (!map) return;

    const updateMarkers = () => {
      // 기존 마커 제거
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];

      // 보호소 마커 추가
      sheltersToDisplay.forEach((markerData) => {
        const marker = new window.google.maps.Marker({
          position: { lat: markerData.lat, lng: markerData.lng },
          map,
          title: markerData.name,
        });

        const contentString = `
          <div>
            <div style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">${markerData.name}</div>            
            <div style="font-size: 12px; font-weight: 500; margin-bottom: 3px;">${markerData.province} ${markerData.district}</div>
            <div style="font-size: 12px; font-weight: 500;">전화번호</div>            
          </div>
        `;

        const infoWindow = new window.google.maps.InfoWindow({
          content: contentString,
          maxWidth: 250,
        });

        let isInfoWindowOpen = false;
        let clickTimer = null;

        const handleClick = () => {
          if (isInfoWindowOpen) {
            infoWindow.close();
          } else {
            infoWindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
          }
          isInfoWindowOpen = !isInfoWindowOpen;
        };

        const handleDoubleClick = () => {
          clearTimeout(clickTimer);
          setCurrentLocation(markerData); // 더블 클릭 시 마커 위치로 이동
        };

        marker.addListener("click", () => {
          clickTimer = setTimeout(handleClick, 200); // 200ms 내에 더블 클릭이 발생하지 않으면 클릭 이벤트 실행
        });

        marker.addListener("dblclick", () => {
          clearTimeout(clickTimer);
          handleDoubleClick();
        });

        markersRef.current.push(marker); // 마커 배열에 추가

        // 선택된 보호소 ID와 일치하면 InfoWindow 열기
        if (markerData.id === selectedShelterId) {
          setTimeout(() => {
            infoWindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
            isInfoWindowOpen = true;
          }, 0);
        }
      });
    };

    updateMarkers();
  }, [map, sheltersToDisplay, markersRef, userLocation, setCurrentLocation]);

  useEffect(() => {
    // selectedShelterId가 변경될 때만 InfoWindow를 열기
    if (!map || !selectedShelterId) return;

    markersRef.current.forEach((marker) => {
      if (marker.getTitle() === selectedShelterId) {
        google.maps.event.trigger(marker, "click");
      }
    });
  }, [selectedShelterId, map, markersRef]);
};

export default useUpdateMarkers;
