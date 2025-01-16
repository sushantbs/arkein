import { Button } from '@/components/ui/button'
import { MapPin, Calendar, BatteryCharging, CheckCircle } from 'lucide-react'

const steps = [
  {
    title: "Choose Location",
    description: "Select where you want your EV charged.",
    icon: MapPin,
  },
  {
    title: "Schedule",
    description: "Pick a convenient time for charging.",
    icon: Calendar,
  },
  {
    title: "We Charge",
    description: "Our team arrives and charges your EV.",
    icon: BatteryCharging,
  },
  {
    title: "You're Ready",
    description: "Your EV is charged and ready to go!",
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How ArkeinElectric Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="font-semibold">Start Charging Now</Button>
        </div>
      </div>
    </section>
  )
}
