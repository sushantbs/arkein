"use client";

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleFindChargingSpotsClick = () => {
    router.push("/stations");
  };

  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Charge Your EV Anywhere, Anytime
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Arkein Electric brings the charging station to you. Choose your
          location, and we will ensure your EV gets the power it needs.
        </p>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Arkein Electric is not operational yet, but we can help you find the
          nearest charging station. Based on your location, let us guide you to
          the closest available spot.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="font-semibold"
            onClick={handleFindChargingSpotsClick}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Find Charging Spots
          </Button>
        </div>
      </div>
    </section>
  );
}
