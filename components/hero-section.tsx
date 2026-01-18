"use client"

import { ChevronDown, Theater, Star } from "lucide-react"

interface HeroSectionProps {
  performerName: string
}

export function HeroSection({ performerName }: HeroSectionProps) {
  const scrollToContent = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToDonate = () => {
    document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Theater className="w-16 h-16 text-primary animate-float" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-40 right-16 opacity-15">
        <Star className="w-12 h-12 text-accent animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10">
        <Star className="w-8 h-8 text-primary animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Theater className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Lincoln Center Fundraiser</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Help </span>
          <span className="text-primary">{performerName}</span>
          <br />
          <span className="text-foreground">Take the Stage</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Support a passionate young performer on his journey to
          <span className="text-foreground font-medium"> Lincoln Center, NYC</span> -
          one of the most prestigious stages in the world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToDonate}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
          >
            Donate Now
          </button>
          <button
            onClick={scrollToContent}
            className="px-8 py-4 border border-border text-foreground font-medium text-lg rounded-xl hover:bg-secondary transition-all"
          >
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}
