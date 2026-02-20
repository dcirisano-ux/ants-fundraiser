"use client"

import { Theater, MapPin, Film, Star, Tv, Music } from "lucide-react"
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

  const credits = [
    {
      icon: Theater,
      label: "Peter Pan Jr.",
      role: "Peter",
    },
    {
      icon: Music,
      label: "The Little Mermaid",
      role: "Sebastian",
    },
    {
      icon: Theater,
      label: "Shrek",
      role: "Donkey",
    },
    {
      icon: Film,
      label: "Honey Bear",
      role: "Hulu",
    },
    {
      icon: Tv,
      label: "Evil Lives Here",
      role: "ID Channel",
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

        {/* Credits section */}
        <ScrollReveal>
          <div className="p-8 md:p-10 bg-secondary rounded-3xl mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Credits & Roles
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {credits.map((credit) => (
                <div
                  key={credit.label}
                  className="group flex flex-col items-center gap-3 p-4 bg-background rounded-2xl hover:bg-muted transition-colors duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <credit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-foreground leading-tight">{credit.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{credit.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bio section */}
        <ScrollReveal>
          <div className="p-8 md:p-10 bg-secondary rounded-3xl relative overflow-hidden">
            {/* Decorative stage lights */}
            <div className="absolute top-0 left-1/4 w-px h-16 bg-gradient-to-b from-primary/20 to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-16 bg-gradient-to-b from-primary/20 to-transparent" />
            <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-primary/30 to-transparent" />

            <div className="relative">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                A rising star with big dreams
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                From his breakout roles in Barclay virtual performances to his on-screen
                debut, {performerName} has proven himself as a versatile young performer.
                He brought life to Peter in Peter Pan Jr., Sebastian in The Little Mermaid,
                and Donkey in Shrek - each role showcasing his range and natural stage presence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Beyond the stage, {performerName} appeared in the short film
                {" "}Honey Bear as part of the Rising Voices Series on Hulu, and
                landed a role on Investigation Discovery&apos;s Evil Lives Here.
                When he is not rehearsing lines or in front of the camera, you can find him
                cheering on the Knicks and Yankees, or building epic worlds in Minecraft.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                This trip to Lincoln Center represents more than just a performance - it is a
                chance to experience the magic of NYC firsthand, fueling his passion
                for theater and opening doors to future opportunities.
              </p>

              {/* Social link */}
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="https://www.instagram.com/anthony_ciro11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  @anthony_ciro11
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
