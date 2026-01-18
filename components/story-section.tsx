"use client"

import { Music, MapPin, Users, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StorySectionProps {
  performerName: string
}

export function StorySection({ performerName }: StorySectionProps) {
  const highlights = [
    {
      icon: Music,
      title: "The Performance",
      description: "Singing at the prestigious Lincoln Center in New York City",
    },
    {
      icon: Users,
      title: "The Troop",
      description: "Traveling with fellow talented performers from the theater group",
    },
    {
      icon: MapPin,
      title: "The Destination",
      description: "New York City - the heart of American theater",
    },
    {
      icon: Calendar,
      title: "The Opportunity",
      description: "A once-in-a-lifetime experience to perform on a world stage",
    },
  ]

  return (
    <section id="story" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who Lives, Who Dies, Who Tells Your Story
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {performerName} has been selected to perform at Lincoln Center with their theater troop.
            This is an incredible opportunity for a young performer to shine on one of the most
            prestigious stages in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {highlights.map((item) => (
            <Card key={item.title} className="bg-secondary/50 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
          <CardContent className="p-8 text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-4">
              {"\"Look around, look around at how lucky we are to be alive right now\""}
            </blockquote>
            <p className="text-muted-foreground">
              Your donation helps cover travel, accommodations, and trip expenses.
              Every contribution brings {performerName} one step closer to this dream.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
