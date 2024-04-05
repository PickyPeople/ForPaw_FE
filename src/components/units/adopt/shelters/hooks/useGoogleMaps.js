import { useEffect } from "react";

export const useGoogleMaps = (ref, options, markersData) => {
  useEffect(() => {
    const loadGoogleMapsScript = (callback) => {
      if (typeof window !== "undefined" && !window.google) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC0Xh1i9FVuHDehtCgiHnr9TuaKxEJYB9M`;
        script.async = true;
        script.defer = true;
        script.onload = () => callback();
        document.head.appendChild(script);
      } else {
        callback();
      }
    };

    // 스크립트 로드 및 맵 초기화 로직
    if (markersData && markersData.length > 0) {
      loadGoogleMapsScript(() => {
        if (window.google && ref.current) {
          const map = new window.google.maps.Map(ref.current, options);

          markersData.forEach((markerData) => {
            const marker = new window.google.maps.Marker({
              position: {
                lat: markerData.lat,
                lng: markerData.lng,
              },
              map: map,
              title: markerData.name,
            });

            const infoWindow = new window.google.maps.InfoWindow({
              content: `<div>${markerData.name}</div>`, // HTML 형식의 내용
            });

            marker.addListener("click", () => {
              infoWindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
              });
            });
          });
        }
      });
    }
  }, [ref, options, markersData]);
};
