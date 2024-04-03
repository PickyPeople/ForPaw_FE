// hooks/useGoogleMaps.js
import { useEffect } from "react";

export const useGoogleMaps = (ref, options) => {
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

    loadGoogleMapsScript(() => {
      if (window.google && ref.current) {
        new window.google.maps.Map(ref.current, options);
      }
    });
  }, [ref, options]);
};
