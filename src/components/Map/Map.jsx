import { useEffect, useRef } from 'react'; 
// import styles from './Map.module.css';
// import mapStyle from './map-style';

export default function Map({ lat, lng, zoom }) {
  const mapDiv = useRef();

  useEffect(function() {
    if (lat && lng) {
      const location = {lat, lng};
      const map = new window.google.maps.Map(
        mapDiv.current,
        {
          zoom: zoom || 12,
          center: location,
          disableDefaultUI: true,
        //   styles: mapStyle
        }
      );
      new window.google.maps.Marker({position: location, map: map});
    }
  }, [lat, lng, zoom]);

  return (
    // <div ref={mapDiv} className={styles.Map}></div>
    <div ref={mapDiv}></div>
  );
}



