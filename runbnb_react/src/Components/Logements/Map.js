import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL, { Marker }  from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import Pin from './pin';

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN ="pk.eyJ1Ijoicm9sbGFuZGphc21pZSIsImEiOiJja2drZjM1dGowNnR0MnFwY2V2dHB4cGltIn0.KGbcbcVaTYQhASyG17Q5rQ";


let Map = (props) => {
  let [viewport, setViewport] = useState({
    longitude: props.state.longitude,
    latitude: props.state.latitude,
    zoom: 8.56
  });
  let mapRef = useRef();
  let handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    [],
    );
    
    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    let handleGeocoderViewportChange = useCallback(
      (newViewport) => {
        let geocoderDefaultOverrides = { transitionDuration: 1000 };
        
        return handleViewportChange({
          ...newViewport,
          ...geocoderDefaultOverrides
        });
      },
      [handleViewportChange]
      );
      
      
      let [position, setPosition] = useState({
        longitude: props.state.longitude,
        latitude: props.state.latitude
  });
  
  let onMarkerDragStart = event => {
    let longitude = event.lngLat[0];
    let latitude = event.lngLat[1];

    setPosition({
      longitude: longitude,
      latitude: latitude
    });
    
    props.setPosition({
      longitude: longitude,
      latitude: latitude
    })
    
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
    </div>
  );
};

export default Map;