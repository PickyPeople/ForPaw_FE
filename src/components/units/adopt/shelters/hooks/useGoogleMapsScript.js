import { useEffect, useRef } from "react";

const useGoogleMapsScript = (callback) => {
  const isMounted = useRef(true);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (typeof window !== "undefined" && !window.google) {
        let isScriptExist = document.getElementById("googleMapsScript");
        if (!isScriptExist) {
          const script = document.createElement("script");
          script.id = "googleMapsScript";
          script.type = "text/javascript";
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC0Xh1i9FVuHDehtCgiHnr9TuaKxEJYB9M`;
          script.async = true;
          script.defer = true;
          script.onload = () => callback();
          document.head.appendChild(script);
        } else {
          callback();
        }
      } else {
        callback();
      }
    };

    loadGoogleMapsScript();

    return () => {
      isMounted.current = false;
    };
  }, [callback]);

  return isMounted;
};

export default useGoogleMapsScript;
