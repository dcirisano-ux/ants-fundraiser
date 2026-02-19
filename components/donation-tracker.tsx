"use client"

import { useEffect, useState, useRef } from "react"
import { ScrollReveal } from "@/components/animated-background"

interface DonationTrackerProps {
  currentAmount: number
  goalAmount: number
  donorCount: number
}

export function DonationTracker({ currentAmount, goalAmount, donorCount }: DonationTrackerProps) {
  const progress = Math.min(currentAmount / goalAmount, 1)
  const percentage = Math.round(progress * 100)
  const remaining = Math.max(goalAmount - currentAmount, 0)
  const [animatedProgress, setAnimatedProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedProgress(percentage)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, percentage])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="progress" className="py-16 px-6" ref={sectionRef}>
      <div className="max-w-2xl mx-auto">
        {/* Large amount */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Amount raised
            </p>
            <div className="font-display text-6xl md:text-7xl font-bold text-primary mb-1">
              {formatCurrency(currentAmount)}
            </div>
            <p className="text-muted-foreground text-sm">
              of {formatCurrency(goalAmount)} goal
            </p>
          </div>
        </ScrollReveal>

        {/* Animated progress bar */}
        <div className="mb-10">
          <div className="h-3 bg-secondary rounded-full overflow-hidden relative">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1500 ease-out relative"
              style={{
                width: `${animatedProgress}%`,
                transitionDuration: "1.5s",
              }}
            >
              {/* Shimmer effect on progress bar */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                  backgroundSize: "200% 100%",
                  animation: isVisible ? "shimmer 2s infinite" : "none",
                }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-foreground font-medium">{percentage}%</span>
            <span className="text-muted-foreground">{formatCurrency(remaining)} to go</span>
          </div>
        </div>

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center py-5 bg-secondary rounded-2xl hover:bg-muted transition-colors duration-300">
              <p className="font-display text-2xl font-bold text-foreground">{formatCurrency(goalAmount)}</p>
              <p className="text-xs text-muted-foreground mt-1">Goal</p>
            </div>
            <div className="text-center py-5 bg-secondary rounded-2xl hover:bg-muted transition-colors duration-300">
              <p className="font-display text-2xl font-bold text-foreground">{donorCount}</p>
              <p className="text-xs text-muted-foreground mt-1">Supporters</p>
            </div>
            <div className="text-center py-5 bg-secondary rounded-2xl hover:bg-muted transition-colors duration-300">
              <p className="font-display text-2xl font-bold text-foreground">{percentage}%</p>
              <p className="text-xs text-muted-foreground mt-1">Funded</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Motivational message */}
        {percentage >= 100 ? (
          <div className="mt-8 py-4 px-6 bg-chart-3/10 border border-chart-3/20 rounded-2xl text-center">
            <p className="text-chart-3 font-medium text-sm">Goal reached. Thank you to every single supporter.</p>
          </div>
        ) : percentage >= 50 ? (
          <div className="mt-8 py-4 px-6 bg-primary/10 border border-primary/20 rounded-2xl text-center">
            <p className="text-primary font-medium text-sm">Momentum is building. Keep it going.</p>
          </div>
        ) : percentage >= 25 ? (
          <div className="mt-8 py-4 px-6 bg-primary/10 border border-primary/20 rounded-2xl text-center">
            <p className="text-primary font-medium text-sm">Every dollar gets Anthony closer to the stage.</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
