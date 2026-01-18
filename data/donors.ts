/**
 * DONOR MANAGEMENT
 *
 * To add a new donor:
 * 1. Add an entry to the DONORS array below
 * 2. Update CURRENT_TOTAL to reflect the new total
 *
 * Each donor entry has:
 * - name: Display name (use "Anonymous" if they prefer)
 * - amount: Donation amount in dollars
 * - message: Optional message from the donor
 * - date: Date of donation (YYYY-MM-DD format)
 */

export interface Donor {
  name: string
  amount: number
  message?: string
  date: string
}

// ==============================================
// UPDATE THIS SECTION AS DONATIONS COME IN
// ==============================================

export const DONATION_GOAL = 2000

// Add new donors here - most recent first
export const DONORS: Donor[] = [
  // Example entries - replace with real donors:
  {
    name: "The Rosenbaum Family",
    amount: 100,
    message: "Break a leg, Anthony!",
    date: "2026-01-18"
  },
  {
    name: "Anonymous",
    amount: 50,
    date: "2026-01-17"
  },
  {
    name: "Grandma & Grandpa",
    amount: 200,
    message: "So proud of you!",
    date: "2026-01-16"
  },
  {
    name: "Uncle Mike",
    amount: 75,
    message: "Can't wait to hear about the show!",
    date: "2026-01-15"
  },
  {
    name: "The Martinez Family",
    amount: 50,
    date: "2026-01-14"
  },
  {
    name: "Coach Johnson",
    amount: 25,
    message: "Go get 'em, champ!",
    date: "2026-01-13"
  },
  {
    name: "Mrs. Thompson",
    amount: 100,
    message: "Your drama teacher believes in you!",
    date: "2026-01-12"
  },
  {
    name: "The Neighborhood Gang",
    amount: 150,
    message: "From all of us on Oak Street",
    date: "2026-01-11"
  },
]

// This is calculated automatically from the DONORS array
export const CURRENT_TOTAL = DONORS.reduce((sum, donor) => sum + donor.amount, 0)

// ==============================================
// CONFIGURATION
// ==============================================

export const PERFORMER_NAME = "Anthony"

// Payment information
export const VENMO_USERNAME = "your-venmo-username"  // Update with real username
export const ZELLE_EMAIL = "your-email@example.com"  // Update with real email/phone
export const ZELLE_PHONE = "(555) 123-4567"          // Alternative Zelle contact

// Optional: Add a note for donors
export const DONATION_NOTE = `For Anthony's Lincoln Center Trip`
