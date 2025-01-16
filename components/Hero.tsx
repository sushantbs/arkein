import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function Hero() {
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
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="font-semibold">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="font-semibold">
            <MapPin className="mr-2 h-4 w-4" />
            Find Charging Spots
          </Button>
        </div>
      </div>
    </section>
  );
}
