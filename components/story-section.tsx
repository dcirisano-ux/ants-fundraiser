"use client"

import { Theater, MapPin, Film, Star } from "lucide-react"
import { ScrollReveal } from "@/components/animated-background"

interface StorySectionProps {
  performerName: string
}

export function StorySection({ performerName }: StorySectionProps) {
  const highlights = [
    {
      icon: Theater,
      title: "The Performance",
      description: "Selected to perform at the iconic Lincoln Center in NYC with numerous students across the country",
    },
    {
      icon: MapPin,
      title: "The Destination",
      description: "NYC - home to Broadway and the world's greatest stages",
    },
    {
      icon: Film,
      title: "His Passions",
      description: "Making people smile through Music and Theater, whether it be on screen or on a stage.",
    },
    {
      icon: Star,
      title: "The Opportunity",
      description: "A once-in-a-lifetime chance to perform on one of the most prestigious stages in the world",
    },
  ]

  return (
    <section id="story" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              About this journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Meet {performerName}
            </h2>
            <div className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed space-y-4 text-center">
              <p>
                Hi, my name is Anthony, and I&apos;m so excited to share an incredible opportunity with you!
              </p>
              <p>
                After auditioning, I was honored to be one of the students selected to represent Eagles Landing Middle School in the National Youth Chorus. Along with several of my peers, I will be traveling to New York City to perform at Lincoln Center. We will be singing alongside talented students from across the country under the direction of renowned conductor Roger Emerson.
              </p>
              <p>
                Music has become such an important part of my life, and being chosen for this experience means so much to me. Not only will I get to perform on an incredible stage, but I will also grow as a musician while learning from amazing mentors. During the trip, we will also explore museums and take a behind the scenes tour of Carnegie Hall, something I have only dreamed about!
              </p>
              <p>
                This is truly a once in a lifetime opportunity, and I am working hard to make it happen. If you are able to support me in reaching my goal, I would be so grateful. Every donation, no matter the size, helps me get one step closer to New York City and this unforgettable experience.
              </p>
              <p>
                Thank you so much for supporting me and being part of my musical journey! 🎶
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.title}>
              <div
                className="flex items-start gap-4 p-6 bg-secondary rounded-2xl h-full hover:bg-muted transition-colors duration-300 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="p-2.5 bg-primary/10 rounded-xl shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  )
}
