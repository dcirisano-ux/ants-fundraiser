import { HeroSection } from "@/components/hero-section"
import { DonationTracker } from "@/components/donation-tracker"
import { StorySection } from "@/components/story-section"
import { DonationSection } from "@/components/donation-section"
import { DonorWall } from "@/components/donor-wall"
import { AnimatedBackground } from "@/components/animated-background"
import { Star } from "lucide-react"

import {
  DONORS,
  CURRENT_TOTAL,
  DONATION_GOAL,
  PERFORMER_NAME,
  VENMO_USERNAME,
  ZELLE_EMAIL,
  ZELLE_PHONE,
  DONATION_NOTE,
} from "@/data/donors"

export default function FundraiserPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection performerName={PERFORMER_NAME} />

        <DonationTracker
          currentAmount={CURRENT_TOTAL}
          goalAmount={DONATION_GOAL}
          donorCount={DONORS.length}
        />

        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        <StorySection performerName={PERFORMER_NAME} />

        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        <DonationSection
          venmoUsername={VENMO_USERNAME}
          zelleEmail={ZELLE_EMAIL}
          zellePhone={ZELLE_PHONE}
          donationNote={DONATION_NOTE}
        />

        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        <DonorWall donors={DONORS} />

        {/* Thank you */}
        <section className="py-20 px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-6">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Thank you for your support
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
              Every donation, no matter the size, brings {PERFORMER_NAME} closer to the stage
              at Lincoln Center. Your generosity means the world.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-xs">
              A fundraiser for {PERFORMER_NAME}&apos;s Lincoln Center trip
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
