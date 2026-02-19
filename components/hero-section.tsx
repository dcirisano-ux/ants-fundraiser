"use client"

import { ArrowDown } from "lucide-react"

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
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Stage spotlight effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        />
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-primary/10 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Small label */}
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8 animate-fadeIn">
          Lincoln Center Fundraiser
        </p>

        {/* Bold headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-balance animate-slideUp">
          <span className="text-foreground">Help </span>
          <span className="text-primary">{performerName}</span>
          <br />
          <span className="text-foreground">take the stage</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: "0.1s" }}>
          Support a young actor and singer on his once-in-a-lifetime journey to
          perform at one of the world&apos;s most iconic venues.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-slideUp" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={scrollToDonate}
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all text-base overflow-hidden"
          >
            <span className="relative z-10">Donate now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          <button
            onClick={scrollToContent}
            className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors text-base"
          >
            Read the story
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
