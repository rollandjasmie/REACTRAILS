import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL, { Marker }  from "react-map-gl";
import Pin from './pin';

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";

const Map = () => {
  const [viewport, setViewport] = useState({
    longitude:55.53817922704148,
    latitude:-21.121661209928707,
    zoom: 8.56
  });

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );

  const deleteMap = () => {
    console.log(mapRef.current);
    //mapRef.current.remove();
  }
  const [position, setPosition] = useState({
  longitude: 55.53817922704148,
  latitude: -21.121661209928707
});


 const onMarkerDragStart = event => {
  };
  return (
    <div style={{ height: "60vh"}}>
      <MapGL
        ref={mapRef}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        width="400px"
        height="330px"
        
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
     
        <Marker
          longitude={position.longitude}
          latitude={position.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragEnd={onMarkerDragStart}

        
        >
          <Pin size={20} />
        </Marker>
      </MapGL>
      
    </div>
  );
};

export default Map;