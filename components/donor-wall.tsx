"use client"

import { Heart, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Donor } from "@/data/donors"

interface DonorWallProps {
  donors: Donor[]
}

export function DonorWall({ donors }: DonorWallProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
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
    <section id="supporters" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Supporters</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thank You to Our Amazing Donors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every contribution brings Anthony closer to the stage. Thank you for being part of this journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {donors.map((donor, index) => (
            <Card
              key={`${donor.name}-${donor.date}-${index}`}
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{donor.name}</h3>
                    <p className="text-sm text-muted-foreground">{formatDate(donor.date)}</p>
                  </div>
                  <span className="text-primary font-bold">{formatAmount(donor.amount)}</span>
                </div>
                {donor.message && (
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                    <Quote className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground italic">{donor.message}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action to join */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see your name on the wall?
          </p>
          <button
            onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-medium rounded-xl hover:bg-primary/20 transition-colors"
          >
            <Heart className="w-4 h-4" />
            Make a Donation
          </button>
        </div>
      </div>
    </section>
  )
}
