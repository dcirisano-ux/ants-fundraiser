"use client"

import { Theater, MapPin, Sparkles, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
      description: "NYC - home to Broadway, the Yankees, the Knicks, and the world's greatest stages",
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

  return (
    <section id="story" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">About This Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet {performerName}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {performerName} has been selected to perform at Lincoln Center with his theater group.
            This is an incredible opportunity for a young performer who has worked hard to develop
            his talents on and off the stage.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Anthony - more personal section */}
        <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <CardContent className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  A Kid with Big Dreams
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When he is not rehearsing lines or practicing songs, you can find {performerName}{" "}
                  cheering on the Knicks and Yankees, or building epic worlds in Minecraft.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This trip to Lincoln Center represents more than just a performance - it is a
                  chance to experience the magic of Broadway and NYC firsthand, fueling his passion
                  for theater and opening doors to future opportunities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-xl text-center">
                  <span className="text-3xl mb-2 block">🎭</span>
                  <p className="text-sm text-muted-foreground">Theater</p>
                </div>
                <div className="p-4 bg-card rounded-xl text-center">
                  <span className="text-3xl mb-2 block">🏀</span>
                  <p className="text-sm text-muted-foreground">Knicks Fan</p>
                </div>
                <div className="p-4 bg-card rounded-xl text-center">
                  <span className="text-3xl mb-2 block">⚾</span>
                  <p className="text-sm text-muted-foreground">Yankees Fan</p>
                </div>
                <div className="p-4 bg-card rounded-xl text-center">
                  <span className="text-3xl mb-2 block">⛏️</span>
                  <p className="text-sm text-muted-foreground">Minecraft</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
