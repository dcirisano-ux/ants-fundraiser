"use client"

import { useState } from "react"
import { Smartphone, Copy, Check, ExternalLink, CreditCard, Banknote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DonationSectionProps {
  venmoUsername: string
  zelleEmail: string
  zellePhone: string
  donationNote: string
}

export function DonationSection({
  venmoUsername,
  zelleEmail,
  zellePhone,
  donationNote,
}: DonationSectionProps) {
  const [activeTab, setActiveTab] = useState<"venmo" | "zelle">("venmo")
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const venmoUrl = `https://venmo.com/${venmoUsername}`
  const venmoDeepLink = `venmo://paycharge?txn=pay&recipients=${venmoUsername}`
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(venmoUrl)}&bgcolor=ffffff&color=000000`

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleOpenVenmo = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isAndroid = /Android/.test(navigator.userAgent)

    if (isIOS || isAndroid) {
      window.location.href = venmoDeepLink
      setTimeout(() => {
        window.open(venmoUrl, "_blank")
      }, 1500)
    } else {
      window.open(venmoUrl, "_blank")
    }
  }

  const suggestedAmounts = [
    { amount: 25, label: "$25" },
    { amount: 50, label: "$50" },
    { amount: 100, label: "$100" },
    { amount: 250, label: "$250" },
  ]

  return (
    <section id="donate" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <CreditCard className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Support Anthony</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Make a Donation
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose your preferred payment method below. Every contribution makes a difference.
          </p>
        </div>

        {/* Payment method tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-secondary rounded-xl p-1">
            <button
              onClick={() => setActiveTab("venmo")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "venmo"
                  ? "bg-[#008CFF] text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Venmo
            </button>
            <button
              onClick={() => setActiveTab("zelle")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "zelle"
                  ? "bg-[#6D1ED4] text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Zelle
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Payment Info Card */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              {activeTab === "venmo" ? (
                <div className="text-center">
                  <h3 className="font-bold text-xl text-foreground mb-6">Pay with Venmo</h3>

                  {/* QR Code */}
                  <div className="bg-white p-4 rounded-xl inline-block mb-4">
                    <img
                      src={qrCodeUrl}
                      alt={`Venmo QR code for @${venmoUsername}`}
                      width={180}
                      height={180}
                      className="rounded-lg"
                    />
                  </div>

                  <p className="text-muted-foreground mb-6">
                    Scan QR code or send to{" "}
                    <span className="text-foreground font-medium">@{venmoUsername}</span>
                  </p>

                  <Button
                    onClick={handleOpenVenmo}
                    className="w-full bg-[#008CFF] hover:bg-[#0074D4] text-white mb-3"
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Open Venmo App
                  </Button>

                  <a
                    href={venmoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Open in browser <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-6 text-center">Pay with Zelle</h3>

                  <div className="space-y-4">
                    {/* Email option */}
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-2">Send to email:</p>
                      <div className="flex items-center justify-between gap-3">
                        <code className="text-foreground font-medium break-all">{zelleEmail}</code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(zelleEmail, "email")}
                          className="shrink-0"
                        >
                          {copiedField === "email" ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Phone option */}
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-2">Or send to phone:</p>
                      <div className="flex items-center justify-between gap-3">
                        <code className="text-foreground font-medium">{zellePhone}</code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(zellePhone, "phone")}
                          className="shrink-0"
                        >
                          {copiedField === "phone" ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <p className="text-sm text-muted-foreground mb-2">Include this note:</p>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-foreground font-medium text-sm">{donationNote}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(donationNote, "note")}
                          className="shrink-0"
                        >
                          {copiedField === "note" ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-6 text-center">
                    Open your banking app and look for Zelle in the send money section
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Suggested amounts & info */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">Suggested Amounts</h3>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {suggestedAmounts.map((item) => (
                <Card
                  key={item.amount}
                  className="bg-secondary/30 border-border hover:border-primary/50 transition-all cursor-pointer hover:scale-[1.02]"
                  onClick={activeTab === "venmo" ? handleOpenVenmo : undefined}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* How funds are used */}
            <Card className="bg-secondary/30 border-border">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How Your Donation Helps</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Travel to New York City</li>
                      <li>Accommodations during the trip</li>
                      <li>Performance-related expenses</li>
                      <li>Meals and activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              Any amount helps! Thank you for your generosity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
