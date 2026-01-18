"use client"

import { Target, TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface DonationTrackerProps {
  currentAmount: number
  goalAmount: number
  donorCount: number
}

export function DonationTracker({ currentAmount, goalAmount, donorCount }: DonationTrackerProps) {
  const progress = Math.min(currentAmount / goalAmount, 1)
  const percentage = Math.round(progress * 100)
  const remaining = Math.max(goalAmount - currentAmount, 0)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="progress" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-border overflow-hidden">
          <CardContent className="p-8 md:p-10">
            {/* Main amount display */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide mb-2">
                Amount Raised
              </p>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {formatCurrency(currentAmount)}
              </div>
              <p className="text-muted-foreground">
                of {formatCurrency(goalAmount)} goal
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="h-4 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${percentage}%` }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-primary font-semibold">{percentage}% funded</span>
                <span className="text-muted-foreground">{formatCurrency(remaining)} to go</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary/30 rounded-xl">
                <Target className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{formatCurrency(goalAmount)}</p>
                <p className="text-xs text-muted-foreground">Goal</p>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-xl">
                <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{donorCount}</p>
                <p className="text-xs text-muted-foreground">Supporters</p>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-xl">
                <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{percentage}%</p>
                <p className="text-xs text-muted-foreground">Progress</p>
              </div>
            </div>

            {/* Motivational message based on progress */}
            {percentage >= 100 ? (
              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                <p className="text-green-400 font-semibold">Goal reached! Thank you to all our amazing supporters!</p>
              </div>
            ) : percentage >= 75 ? (
              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-xl text-center">
                <p className="text-primary font-medium">Almost there! Just a little more to reach our goal.</p>
              </div>
            ) : percentage >= 50 ? (
              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-xl text-center">
                <p className="text-primary font-medium">Halfway there! Your support is making this possible.</p>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
