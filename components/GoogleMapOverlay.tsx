"use client";

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API; // Store API key securely

const containerStyle = {
  width: "100%",
  height: "500px", // Adjust height as needed
};

const center = {
  lat: 12.9715987, // Latitude of Bangalore
  lng: 77.5945627, // Longitude of Bangalore
};

const GoogleMapOverlay: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stations, setStations] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedStation, setSelectedStation] = useState<any>(null);

  useEffect(() => {
    // Fetch charging stations from your API route
    const fetchStations = async () => {
      try {
        const response = await fetch("/api/get-charging-stations"); // API route
        const data = await response.json();
        setStations(data.results || []); // Store station locations
      } catch (error) {
        console.error("Error fetching charging stations:", error);
      }
    };

    fetchStations();
  }, []);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Adjust zoom level for desired coverage
      >
        {stations.map((station, index) => (
          <div key={index}>
            <Marker
              key={index}
              position={{
                lat: station.geometry.location.lat,
                lng: station.geometry.location.lng,
              }}
              onClick={() => setSelectedStation(station)}
            />
            {selectedStation && (
              <InfoWindow
                position={{
                  lat: selectedStation.geometry.location.lat,
                  lng: selectedStation.geometry.location.lng,
                }}
                onCloseClick={() => setSelectedStation(null)}
              >
                <div>
                  <h3>{selectedStation.name}</h3>
                  <p>Address: {selectedStation.vicinity}</p>
                  <p>Rating: {selectedStation.rating || "N/A"}</p>
                </div>
              </InfoWindow>
            )}
          </div>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapOverlay;
