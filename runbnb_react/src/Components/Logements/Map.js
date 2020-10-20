import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL, { Marker }  from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import Pin from './pin';

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";


const Map = (props) => {
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
    const longitude = event.lngLat[0];
    const latitude = event.lngLat[1];

    setPosition({
      longitude: longitude,
      latitude: latitude
    });
    
    props.setPosition({
      longitude: longitude,
      latitude: latitude
    })
    console.log(props.state)

  };
  return (
    <div>
      <MapGL
        ref={mapRef}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        width="400px"
        height="400px"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
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
      <button onClick={deleteMap}>Delete</button>
    </div>
  );
};

export default Map;