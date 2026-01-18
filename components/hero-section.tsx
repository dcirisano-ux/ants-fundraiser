"use client"

import { Star, ChevronDown } from "lucide-react"

interface HeroSectionProps {
  performerName: string
}

export function HeroSection({ performerName }: HeroSectionProps) {
  const scrollToContent = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Star decorations */}
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-primary fill-primary animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          <span className="text-primary">Rise Up</span>
          <br />
          <span className="text-foreground">for {performerName}</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-serif italic">
          {"\"I am not throwing away my shot\""}
        </p>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Help send a talented young performer to{" "}
          <span className="text-primary font-semibold">Lincoln Center, New York City</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Be Part of the Story
          </button>
          <button
            onClick={scrollToContent}
            className="px-8 py-4 border-2 border-primary/50 text-foreground font-semibold text-lg rounded-lg hover:bg-primary/10 transition-all"
          >
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="animate-bounce text-primary/60 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}
