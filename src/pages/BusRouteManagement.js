import { useState } from "react";
import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Map center (Tripoli Example)
const center = {
  lat: 34.4342,
  lng: 35.8362,
};

// Mock route data (example polyline route)
const mockRoute = [
  { lat: 34.4335, lng: 35.8342 },
  { lat: 34.4342, lng: 35.8362 },
  { lat: 34.4350, lng: 35.8380 },
  { lat: 34.4365, lng: 35.8395 },
];

const BusRouteManagement = () => {
  const [busStops, setBusStops] = useState([]);

  // Function to add a bus stop marker when clicking on the map
  const addBusStop = (event) => {
    setBusStops([...busStops, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bus Route Management</h2>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onClick={addBusStop}
        >
          {/* Display user-added bus stops */}
          {busStops.map((stop, index) => (
            <Marker key={index} position={stop} />
          ))}

          {/* Display pre-defined route as a polyline */}
          <Polyline
            path={mockRoute}
            options={{ strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 4 }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default BusRouteManagement;
