import { useEffect, useRef } from 'react';

export default function Map({ lat, lng, zoom }) {
  const mapDiv = useRef(null);

  useEffect(function () {
    if (lat && lng) {
      const location = { lat, lng };
      const map = new window.google.maps.Map(
        mapDiv.current,
        {
          zoom: zoom || 12,
          center: location,
          disableDefaultUI: true,
        }
      );
      new window.google.maps.Marker({ position: location, map: map });
    }
  }, [lat, lng, zoom]);
  return (
    <div className="map" ref={mapDiv}></div>
  );
}



