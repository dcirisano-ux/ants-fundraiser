import { HeroSection } from "@/components/hero-section"
import { DonationTracker } from "@/components/donation-tracker"
import { StorySection } from "@/components/story-section"
import { VenmoQRSection } from "@/components/venmo-qr-section"
import { StarDecoration } from "@/components/star-decoration"
import { Star } from "lucide-react"

// Configuration - Update these values as donations come in
const PERFORMER_NAME = "Your Nephew"
const VENMO_USERNAME = "your-venmo-username"
const CURRENT_DONATIONS = 750
const DONATION_GOAL = 2000

export default function FundraiserPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Background star effect */}
      <StarDecoration />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection performerName={PERFORMER_NAME} />
        
        <DonationTracker currentAmount={CURRENT_DONATIONS} goalAmount={DONATION_GOAL} />
        
        <StorySection performerName={PERFORMER_NAME} />
        
        <VenmoQRSection venmoUsername={VENMO_USERNAME} />

        {/* Thank you section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-primary fill-primary"
                />
              ))}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You for Your Support
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Every donation brings {PERFORMER_NAME} closer to the stage at Lincoln Center.
              You are helping write this chapter of their story.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground text-sm mb-2">
              {"\"History has its eyes on you\""}
            </p>
            <p className="text-muted-foreground/60 text-xs">
              A Hamilton-inspired fundraiser for {PERFORMER_NAME}&apos;s Lincoln Center trip
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
