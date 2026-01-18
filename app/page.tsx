import { HeroSection } from "@/components/hero-section"
import { DonationTracker } from "@/components/donation-tracker"
import { StorySection } from "@/components/story-section"
import { DonationSection } from "@/components/donation-section"
import { DonorWall } from "@/components/donor-wall"
import { Heart } from "lucide-react"

// Import donor data and configuration
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
      {/* Content */}
      <div className="relative z-10">
        <HeroSection performerName={PERFORMER_NAME} />

        <DonationTracker
          currentAmount={CURRENT_TOTAL}
          goalAmount={DONATION_GOAL}
          donorCount={DONORS.length}
        />

        <StorySection performerName={PERFORMER_NAME} />

        <DonationSection
          venmoUsername={VENMO_USERNAME}
          zelleEmail={ZELLE_EMAIL}
          zellePhone={ZELLE_PHONE}
          donationNote={DONATION_NOTE}
        />

        <DonorWall donors={DONORS} />

        {/* Thank you section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-6">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Thank You for Your Support
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Every donation, no matter the size, brings {PERFORMER_NAME} closer to the stage
              at Lincoln Center. Your generosity means the world to us.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              A fundraiser for {PERFORMER_NAME}&apos;s Lincoln Center trip
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
