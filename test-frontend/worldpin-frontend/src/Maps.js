import React, {useEffect, useState} from "react";

import { GoogleMap,useJsApiLoader ,useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";


const libraries = ["places"]; //when react rerenders, it does a div to see if it needs to rerender. When arrays and objects are used as literals, react looks to axt as if theyre diff objects, even though they have the same details within it (especially the google maps api), and rerenders in a weird way and avoid too many rerenders

const containerStyle = {  //same as above,to avoid rerenders  we create this variable outside the GoogleMap function
    height: "100vh",    //lets set width and height to take up the whole page
    width: "100vw",
  };

  const center = {    //this is the location (London) where our page will load in initially
    lat: 51.507351,
    lng: -0.127758
  };
  

const Maps=()=> {
console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
      ) : <></>
    }

//     const { isLoaded, loadError } = useLoadScript({  //useLoadScript is a hook that comes with the GoogleMaps Package (see imports) ,the hook gives us back the two variables within the parameter, so we know when our googlescript is ready so we can load the map
//         googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,  //fetch our own api key from our prcoess.env file
//         libraries,


// });

// return (
//      <div>
// <GoogleMap //we have to add some props to ensure this works
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}  //this is the zoom level our map starts in upon loading page
//         center={center}
//         // options={options}
//         // onClick={onMapClick}
//         // onLoad={onMapLoad}
//       ></GoogleMap>
// </div>
// )
// }
export default  Maps;