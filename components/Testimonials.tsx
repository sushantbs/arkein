import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    title: "EV Enthusiast",
    content: "ArkeinElectric has been a game-changer for me. I can now charge my EV wherever I am, without worrying about finding a charging station.",
  },
  {
    name: "Michael R.",
    avatar: "MR",
    title: "Business Owner",
    content: "As someone who's always on the go, ArkeinElectric's service is invaluable. It's convenient, reliable, and has made owning an EV so much easier.",
  },
  {
    name: "Emily T.",
    avatar: "ET",
    title: "Urban Commuter",
    content: "I love the flexibility ArkeinElectric offers. Whether I'm at home, work, or out shopping, I can get my car charged without any hassle.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

