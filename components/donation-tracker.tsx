"use client"

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
    <section id="progress" className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Large amount */}
        <div className="text-center mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Amount raised
          </p>
          <div className="font-display text-6xl md:text-7xl font-bold text-primary mb-1 animate-countUp">
            {formatCurrency(currentAmount)}
          </div>
          <p className="text-muted-foreground text-sm">
            of {formatCurrency(goalAmount)} goal
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-foreground font-medium">{percentage}%</span>
            <span className="text-muted-foreground">{formatCurrency(remaining)} to go</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center py-5 bg-secondary rounded-2xl">
            <p className="font-display text-2xl font-bold text-foreground">{formatCurrency(goalAmount)}</p>
            <p className="text-xs text-muted-foreground mt-1">Goal</p>
          </div>
          <div className="text-center py-5 bg-secondary rounded-2xl">
            <p className="font-display text-2xl font-bold text-foreground">{donorCount}</p>
            <p className="text-xs text-muted-foreground mt-1">Supporters</p>
          </div>
          <div className="text-center py-5 bg-secondary rounded-2xl">
            <p className="font-display text-2xl font-bold text-foreground">{percentage}%</p>
            <p className="text-xs text-muted-foreground mt-1">Funded</p>
          </div>
        </div>

        {/* Motivational message */}
        {percentage >= 100 ? (
          <div className="mt-8 py-4 px-6 bg-chart-3/10 border border-chart-3/20 rounded-2xl text-center">
            <p className="text-chart-3 font-medium text-sm">Goal reached! Thank you to every single supporter.</p>
          </div>
        ) : percentage >= 75 ? (
          <div className="mt-8 py-4 px-6 bg-primary/10 border border-primary/20 rounded-2xl text-center">
            <p className="text-primary font-medium text-sm">Almost there. Every dollar counts.</p>
          </div>
        ) : percentage >= 50 ? (
          <div className="mt-8 py-4 px-6 bg-primary/10 border border-primary/20 rounded-2xl text-center">
            <p className="text-primary font-medium text-sm">Halfway there! Keep the momentum going.</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
