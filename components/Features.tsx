import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Clock, Zap, Shield } from "lucide-react";

const features = [
  {
    title: "Choose Your Location",
    description: "Select any convenient spot for charging your EV.",
    icon: MapPin,
  },
  {
    title: "24/7 Availability",
    description:
      "Our service is available round the clock, whenever you need it.",
    icon: Clock,
  },
  {
    title: "Fast Charging",
    description: "Get your EV charged quickly with our advanced technology.",
    icon: Zap,
  },
  {
    title: "Secure and Reliable",
    description: "Our charging process is safe and dependable.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Arkein Electric?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
