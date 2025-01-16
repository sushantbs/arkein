import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience Convenient EV Charging?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join ArkeinElectric today and never worry about finding a charging station again. Get started with our service and enjoy the freedom to charge your EV anywhere.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button size="lg" className="font-semibold">Get Started</Button>
        </div>
      </div>
    </section>
  )
}

