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

export const DONATION_GOAL = 2450

// Add new donors here - most recent first
export const DONORS: Donor[] = [
  {
    name: "Papa",
    amount: 500,
    message: "So proud of you!",
    date: "2026-02-19"
  },
  {
    name: "Grandma Joanne",
    amount: 100,
    message: "Love you Anthony. Keep reaching for the stars!",
    date: "2026-02-18"
  },
  {
    name: "Titi Em and Uncle Norm",
    amount: 100,
    message: "Break a leg, Anthony!",
    date: "2026-02-17"
  },
]

// Manually set to reflect actual amount raised
export const CURRENT_TOTAL = 700

// ==============================================
// CONFIGURATION
// ==============================================

export const PERFORMER_NAME = "Anthony"

// Payment information
export const VENMO_USERNAME = "anthonycirisano"
export const ZELLE_EMAIL = "your-email@example.com"  // Update with real email/phone
export const ZELLE_PHONE = "561-350-8143"

// Optional: Add a note for donors
export const DONATION_NOTE = `For Anthony's Lincoln Center Trip`
