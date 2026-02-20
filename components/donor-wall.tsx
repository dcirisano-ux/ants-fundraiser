"use client"

import { Heart } from "lucide-react"
import { ScrollReveal } from "@/components/animated-background"
import type { Donor } from "@/data/donors"

interface DonorWallProps {
  donors: Donor[]
}

export function DonorWall({ donors }: DonorWallProps) {
  const formatDate = (dateString: string) => {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const [, month, day] = dateString.split("-").map(Number)
    return `${months[month - 1]} ${day}`
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  if (donors.length === 0) {
    return null
  }

  return (
    <section id="supporters" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Our supporters
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Thank you, everyone
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Every contribution brings Anthony closer to the stage. Thank you for being part of this journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Donor list */}
        <div className="space-y-3">
          {donors.map((donor, index) => (
            <ScrollReveal key={`${donor.name}-${donor.date}-${index}`}>
              <div
                className="flex items-center justify-between p-5 bg-secondary rounded-2xl hover:bg-muted transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="font-display font-bold text-primary text-sm">
                      {donor.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-foreground text-sm">{donor.name}</h3>
                    {donor.message ? (
                      <p className="text-xs text-muted-foreground truncate">{donor.message}</p>
                    ) : (
                      <p className="text-xs text-muted-foreground">{formatDate(donor.date)}</p>
                    )}
                  </div>
                </div>
                <span className="font-display font-bold text-primary text-sm shrink-0 ml-4">{formatAmount(donor.amount)}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Want to see your name here?
            </p>
            <button
              onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary/20 transition-colors text-sm"
            >
              <Heart className="w-4 h-4" />
              Make a donation
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
