import ChargingStations from "@/components/ChargingStations";

export default function StationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          EV Charging Stations
        </h1>
        <ChargingStations />
      </main>
    </div>
  );
}
