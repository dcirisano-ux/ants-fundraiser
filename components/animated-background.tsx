"use client"

import { useEffect, useState, useRef } from "react"

function Baseball({ delay, startX, startY }: { delay: number; startX: number; startY: number }) {
  return (
    <svg
      className="absolute w-6 h-6 opacity-0"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        animation: `floatBaseball 8s ease-in-out ${delay}s infinite`,
      }}
    >
      <circle cx="12" cy="12" r="11" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
      <path
        d="M6 3.5C8.5 6 8.5 10 6 14M6 14C3.5 18 3.5 20.5 6 21"
        stroke="hsl(var(--primary))"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M18 3.5C15.5 6 15.5 10 18 14M18 14C20.5 18 20.5 20.5 18 21"
        stroke="hsl(var(--primary))"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

function TheaterMask({ delay, x, y, type }: { delay: number; x: number; y: number; type: "happy" | "sad" }) {
  return (
    <svg
      className="absolute w-8 h-8 opacity-0"
      viewBox="0 0 32 32"
      fill="none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `floatMask 10s ease-in-out ${delay}s infinite`,
      }}
    >
      <rect x="4" y="4" width="24" height="22" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
      <circle cx="12" cy="14" r="2" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="20" cy="14" r="2" fill="hsl(var(--primary))" opacity="0.5" />
      {type === "happy" ? (
        <path d="M11 20C11 22 14 24 16 24C18 24 21 22 21 20" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      ) : (
        <path d="M11 24C11 22 14 20 16 20C18 20 21 22 21 24" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      )}
    </svg>
  )
}

function Spotlight({ delay, x }: { delay: number; x: number }) {
  return (
    <div
      className="absolute top-0 opacity-0"
      style={{
        left: `${x}%`,
        animation: `spotlightSweep 12s ease-in-out ${delay}s infinite`,
      }}
    >
      <div
        className="w-px h-screen"
        style={{
          background: `linear-gradient(180deg, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
        }}
      />
    </div>
  )
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <Spotlight delay={0} x={20} />
      <Spotlight delay={4} x={75} />

      <Baseball delay={0} startX={10} startY={20} />
      <Baseball delay={3} startX={85} startY={60} />
      <Baseball delay={6} startX={50} startY={80} />

      <TheaterMask delay={1} x={90} y={15} type="happy" />
      <TheaterMask delay={5} x={5} y={70} type="sad" />
      <TheaterMask delay={8} x={70} y={45} type="happy" />
    </div>
  )
}

export function CurtainReveal() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Left curtain */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 z-10 transition-transform duration-1000 ease-out"
        style={{
          background: "linear-gradient(90deg, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.02))",
          transform: isOpen ? "translateX(-105%)" : "translateX(0)",
        }}
      >
        <div className="absolute inset-y-0 right-0 w-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-full"
              style={{
                height: "8.33%",
                background: i % 2 === 0 ? "hsl(var(--primary) / 0.04)" : "transparent",
              }}
            />
          ))}
        </div>
      </div>
      {/* Right curtain */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 z-10 transition-transform duration-1000 ease-out"
        style={{
          background: "linear-gradient(270deg, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.02))",
          transform: isOpen ? "translateX(105%)" : "translateX(0)",
        }}
      >
        <div className="absolute inset-y-0 left-0 w-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-full"
              style={{
                height: "8.33%",
                background: i % 2 === 0 ? "hsl(var(--primary) / 0.04)" : "transparent",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
      }}
    >
      {children}
    </div>
  )
}
