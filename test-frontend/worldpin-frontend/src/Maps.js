import React, { useEffect, useState } from "react";
import mapStyle from "./mapStyle";

import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"]; //when react rerenders, it does a div to see if it needs to rerender. When arrays and objects are used as literals, react looks to axt as if theyre diff objects, even though they have the same details within it (especially the google maps api), and rerenders in a weird way and avoid too many rerenders

const containerStyle = {
  //same as above,to avoid rerenders  we create this variable outside the GoogleMap function
  height: "100vh", //lets set width and height to take up the whole page
  width: "100vw",
};

const center = {
  //this is the location (London) where our page will load in initially
  lat: 51.507351,
  lng: -0.127758,
};

const options = {
  styles: mapStyle,
  disableDefaultUI: true, // removes default google maps functionality
  zoomControl: true,
};

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  
  
  const [map, setMap] = React.useState(null);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = React.useState(null);


  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <h1>
        World Pin
        <span role="img" aria-label="tent">
          🌍📍
        </span>
      </h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9.5}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
        options={options}
        onClick={onMapClick}    // click event gives properties such as longitude and lang
      >
        {/* Child components, such as markers, info windows, etc. */}
        {markers.map(
          (
            marker //we already have our useState,when we click a location in the map, we can see the lat and long generated in the console; but we need this markers.map method to create pins in these locations
          ) => (
            <Marker //we want to show a marker component that comes with our googlemaps package (this is the little red pin we see whenever we click somewhere on googlemaps)
              key={`${marker.lat}-${marker.lng}`} //as we're iterating, we add a key component so each clicked location is unique
              position={{ lat: marker.lat, lng: marker.lng }} //let's show our pin at the specified clicked location, based on it's lat and long
              onClick={() => {
                setSelected(marker);
              }}
              icon={{
                //using icon we can override the original pin and add our own
                url: `/icon.png`,
                origin: new window.google.maps.Point(0, 0), //we set origin so when we click, pin appears EXACTLY where clicked
                anchor: new window.google.maps.Point(15, 15), //we set anchor half the size, so middle of our pin icon is exactly where they clicked
                scaledSize: new window.google.maps.Size(30, 30), //set size of icon
              }}
            />
          )
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default Maps;
