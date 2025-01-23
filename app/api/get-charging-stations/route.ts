import { NextResponse } from "next/server";

// const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_API_KEY = "AIzaSyAFXFL2-YljPo8wGSb-nYf-YcFPYZwees4";

export async function GET() {
  const location = "12.9715987,77.5945627"; // Bangalore coordinates
  const radius = 5000; // Search radius in meters
  const type = "electric_vehicle_charging_station";

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://arkein.energy",
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch charging stations" },
      { status: 500 }
    );
  }
}
