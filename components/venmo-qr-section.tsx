"use client"

import { Smartphone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface VenmoQRSectionProps {
  venmoUsername: string
}

export function VenmoQRSection({ venmoUsername }: VenmoQRSectionProps) {
  const venmoUrl = `https://venmo.com/${venmoUsername}`
  const venmoDeepLink = `venmo://paycharge?txn=pay&recipients=${venmoUsername}`

  // QR code via external API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(venmoUrl)}&bgcolor=0a0a0f&color=d4a84b`

  const suggestedAmounts = [
    { amount: 10, label: "$10", emoji: "Quill & Ink" },
    { amount: 25, label: "$25", emoji: "Playbill" },
    { amount: 50, label: "$50", emoji: "Orchestra Seat" },
    { amount: 100, label: "$100", emoji: "Standing Ovation" },
  ]

  const handleOpenVenmo = () => {
    // Try deep link first, fallback to web
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isAndroid = /Android/.test(navigator.userAgent)

    if (isIOS || isAndroid) {
      window.location.href = venmoDeepLink
      // Fallback to web after a short delay if app doesn't open
      setTimeout(() => {
        window.open(venmoUrl, "_blank")
      }, 1500)
    } else {
      window.open(venmoUrl, "_blank")
    }
  }

  return (
    <section id="donate" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Take Your Shot
          </h2>
          <p className="text-muted-foreground text-lg italic font-serif">
            {"\"Hey yo, I'm just like my country - young, scrappy, and hungry\""}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* QR Code */}
          <Card className="bg-card border-primary/30">
            <CardContent className="p-8 text-center">
              <h3 className="font-bold text-xl text-foreground mb-4">Scan to Donate via Venmo</h3>

              <div className="bg-foreground p-4 rounded-xl inline-block mb-4">
                <img
                  src={qrCodeUrl || "/placeholder.svg"}
                  alt={`Venmo QR code for @${venmoUsername}`}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              <p className="text-muted-foreground mb-4">
                @{venmoUsername}
              </p>

              <Button
                onClick={handleOpenVenmo}
                className="w-full bg-[#008CFF] hover:bg-[#0074D4] text-white"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Open in Venmo App
              </Button>

              <a
                href={venmoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mt-4 transition-colors"
              >
                Or open in browser <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>

          {/* Suggested amounts */}
          <div>
            <h3 className="font-bold text-xl text-foreground mb-6 text-center md:text-left">
              Suggested Donations
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {suggestedAmounts.map((item) => (
                <Card
                  key={item.amount}
                  className="bg-secondary/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer hover:scale-105"
                  onClick={handleOpenVenmo}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.emoji}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mt-6 text-center md:text-left">
              Every donation, no matter the size, helps make this dream a reality.
              Thank you for being part of this story!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
