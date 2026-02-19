"use client"

import { Theater, MapPin, Sparkles, Trophy } from "lucide-react"

interface StorySectionProps {
  performerName: string
}

export function StorySection({ performerName }: StorySectionProps) {
  const highlights = [
    {
      icon: Theater,
      title: "The Performance",
      description: "Selected to perform at the iconic Lincoln Center in New York City with his theater group",
    },
    {
      icon: MapPin,
      title: "The Destination",
      description: "NYC - home to Broadway and the world's greatest stages",
    },
    {
      icon: Sparkles,
      title: "The Passion",
      description: "A talented young performer who brings energy and dedication to everything he does",
    },
    {
      icon: Trophy,
      title: "The Opportunity",
      description: "A once-in-a-lifetime chance to perform on one of the most prestigious stages in the world",
    },
  ]

  const interests = [
    { label: "Theater", icon: "🎭" },
    { label: "Knicks", icon: "🏀" },
    { label: "Yankees", icon: "⚾" },
    { label: "Minecraft", icon: "⛏️" },
  ]

  return (
    <section id="story" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            About this journey
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Meet {performerName}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {performerName} has been selected to perform at Lincoln Center with his theater group.
            This is an incredible opportunity for a young performer who has worked hard to develop
            his talents on and off the stage.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 bg-secondary rounded-2xl"
            >
              <div className="p-2.5 bg-primary/10 rounded-xl shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Personal section */}
        <div className="p-8 md:p-10 bg-secondary rounded-3xl">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                A kid with big dreams
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                When he is not rehearsing lines or practicing songs, you can find {performerName}{" "}
                cheering on the Knicks and Yankees, or building epic worlds in Minecraft.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                This trip to Lincoln Center represents more than just a performance - it is a
                chance to experience the magic of Broadway and NYC firsthand, fueling his passion
                for theater and opening doors to future opportunities.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-3">
              {interests.map((item) => (
                <div key={item.label} className="p-4 bg-background rounded-2xl text-center">
                  <span className="text-2xl mb-1.5 block">{item.icon}</span>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
