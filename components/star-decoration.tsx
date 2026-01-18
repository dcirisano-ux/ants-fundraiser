"use client"

import React from "react"

import { useEffect, useState } from "react"

export function StarDecoration() {
  const [stars, setStars] = useState<Array<{ id: number; style: React.CSSProperties }>>([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      },
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
          style={star.style}
        />
      ))}
    </div>
  )
}
