"use client";

import { useEffect, useState } from "react";

export default function ChargingStations() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stations, setStations] = useState<any[]>([]);

  useEffect(() => {
    async function fetchStations() {
      try {
        const response = await fetch("/api/get-charging-stations");
        const data = await response.json();
        setStations(data.results || []);
      } catch (error) {
        console.error("Failed to fetch stations:", error);
      }
    }

    fetchStations();

    return () => {
      console.log("Unmouting ChargingStations");
    };
  }, []);

  return (
    <div>
      <h2>Nearby EV Charging Stations</h2>
      <ul>
        {stations.map((station, index) => (
          <li key={index}>
            <strong>{station.name}</strong> - {station.vicinity}
          </li>
        ))}
      </ul>
    </div>
  );
}
