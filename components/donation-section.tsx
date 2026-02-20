"use client"

import { useState } from "react"
import { Smartphone, Copy, Check, ExternalLink, Plane, Hotel, Ticket, UtensilsCrossed } from "lucide-react"
import { ScrollReveal } from "@/components/animated-background"

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

  const breakdownItems = [
    { icon: Plane, label: "Travel to New York City" },
    { icon: Hotel, label: "Accommodations during the trip" },
    { icon: Ticket, label: "Performance-related expenses" },
    { icon: UtensilsCrossed, label: "Meals and activities" },
  ]

  return (
    <section id="donate" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Support Anthony
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Make a donation
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Choose your preferred payment method below. Every contribution makes a difference.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal>
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-secondary rounded-full p-1">
              <button
                onClick={() => setActiveTab("venmo")}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeTab === "venmo"
                    ? "bg-[#008CFF] text-[#ffffff]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Venmo
              </button>
              <button
                onClick={() => setActiveTab("zelle")}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeTab === "zelle"
                    ? "bg-[#6D1ED4] text-[#ffffff]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Zelle
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Payment card */}
          <ScrollReveal>
            <div className="bg-secondary rounded-3xl p-8">
              {activeTab === "venmo" ? (
                <div className="text-center">
                  <h3 className="font-display font-bold text-lg text-foreground mb-6">Pay with Venmo</h3>

                  <div className="bg-[#ffffff] p-4 rounded-2xl inline-block mb-4">
                    <img
                      src={qrCodeUrl}
                      alt={`Venmo QR code for @${venmoUsername}`}
                      width={180}
                      height={180}
                      className="rounded-lg"
                      crossOrigin="anonymous"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    Scan QR code or send to{" "}
                    <span className="text-foreground font-medium">@{venmoUsername}</span>
                  </p>

                  <button
                    onClick={handleOpenVenmo}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#008CFF] text-[#ffffff] font-semibold rounded-full hover:opacity-90 transition-opacity text-sm mb-3"
                  >
                    <Smartphone className="w-4 h-4" />
                    Open Venmo App
                  </button>

                  <a
                    href={venmoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Open in browser <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ) : (
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-6 text-center">Pay with Zelle</h3>

                  <div className="space-y-3">
                    {/* Email */}
                    <div className="p-4 bg-background rounded-2xl">
                      <p className="text-xs text-muted-foreground mb-1.5">Send to email</p>
                      <div className="flex items-center justify-between gap-3">
                        <code className="text-foreground font-medium text-sm break-all">{zelleEmail}</code>
                        <button
                          onClick={() => copyToClipboard(zelleEmail, "email")}
                          className="shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors"
                          aria-label="Copy email"
                        >
                          {copiedField === "email" ? (
                            <Check className="w-4 h-4 text-chart-3" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="p-4 bg-background rounded-2xl">
                      <p className="text-xs text-muted-foreground mb-1.5">Zelle just a phone number</p>
                      <div className="flex items-center justify-between gap-3">
                        <code className="text-foreground font-medium text-sm">{zellePhone}</code>
                        <button
                          onClick={() => copyToClipboard(zellePhone, "phone")}
                          className="shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors"
                          aria-label="Copy phone"
                        >
                          {copiedField === "phone" ? (
                            <Check className="w-4 h-4 text-chart-3" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                      <p className="text-xs text-muted-foreground mb-1.5">Include this note</p>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-foreground font-medium text-sm">{donationNote}</span>
                        <button
                          onClick={() => copyToClipboard(donationNote, "note")}
                          className="shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors"
                          aria-label="Copy note"
                        >
                          {copiedField === "note" ? (
                            <Check className="w-4 h-4 text-chart-3" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-5 text-center">
                    Open your banking app and look for Zelle in the send money section
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right column */}
          <ScrollReveal>
            <div>
              <h3 className="font-display font-bold text-foreground mb-4">Suggested amounts</h3>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {suggestedAmounts.map((item) => (
                  <button
                    key={item.amount}
                    onClick={activeTab === "venmo" ? handleOpenVenmo : undefined}
                    className="group py-5 bg-secondary rounded-2xl text-center hover:bg-muted transition-all duration-300"
                  >
                    <span className="font-display text-xl font-bold text-primary group-hover:scale-110 inline-block transition-transform duration-300">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* How funds are used */}
              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="font-display font-semibold text-foreground mb-4 text-sm">How your donation helps</h4>
                <ul className="text-sm text-muted-foreground space-y-3">
                  {breakdownItems.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center">
                Any amount helps. Thank you for your generosity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
