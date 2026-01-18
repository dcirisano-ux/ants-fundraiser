"use client"

import { Star, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface DonationTrackerProps {
  currentAmount: number
  goalAmount: number
}

const ACTS = [
  { name: "Act I", subtitle: "The Prologue", threshold: 0.25 },
  { name: "Act II", subtitle: "The Journey", threshold: 0.5 },
  { name: "Act III", subtitle: "The Stage", threshold: 0.75 },
  { name: "Finale", subtitle: "Lincoln Center", threshold: 1.0 },
]

export function DonationTracker({ currentAmount, goalAmount }: DonationTrackerProps) {
  const progress = Math.min(currentAmount / goalAmount, 1)
  const percentage = Math.round(progress * 100)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="progress" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            <Sparkles className="inline-block w-8 h-8 text-primary mr-2" />
            Rise Up!
            <Sparkles className="inline-block w-8 h-8 text-primary ml-2" />
          </h2>
          <p className="text-muted-foreground text-lg italic font-serif">
            {"\"I wanna be in the room where it happens\""}
          </p>
        </div>

        <Card className="bg-card border-primary/30 overflow-hidden">
          <CardContent className="p-8">
            {/* Amount display */}
            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {formatCurrency(currentAmount)}
              </div>
              <div className="text-muted-foreground text-lg">
                raised of {formatCurrency(goalAmount)} goal
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative mb-8">
              <div className="h-4 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="text-center mt-2 text-primary font-bold">{percentage}% Complete</div>
            </div>

            {/* Acts timeline */}
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {ACTS.map((act, index) => {
                const isCompleted = progress >= act.threshold
                const isActive = progress >= (ACTS[index - 1]?.threshold || 0) && progress < act.threshold

                return (
                  <div key={act.name} className="text-center">
                    <div
                      className={`
                        w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 rounded-full flex items-center justify-center
                        transition-all duration-500
                        ${isCompleted ? "bg-primary text-primary-foreground" : isActive ? "bg-primary/30 text-primary border-2 border-primary" : "bg-secondary text-muted-foreground"}
                      `}
                    >
                      <Star
                        className={`w-6 h-6 md:w-8 md:h-8 ${isCompleted ? "fill-primary-foreground" : isActive ? "fill-primary" : ""}`}
                      />
                    </div>
                    <div
                      className={`font-bold text-sm md:text-base ${isCompleted || isActive ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {act.name}
                    </div>
                    <div className="text-xs text-muted-foreground hidden md:block">{act.subtitle}</div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
