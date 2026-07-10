"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"

function SoccerBall({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className="block"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="30" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
      {/* center pentagon */}
      <polygon points="32,19 40.5,25.2 37.3,35.2 26.7,35.2 23.5,25.2" fill="#0f172a" />
      {/* spokes out to the rim */}
      <path
        d="M32 19 L32 5 M40.5 25.2 L52 20.5 M37.3 35.2 L45.5 46 M26.7 35.2 L18.5 46 M23.5 25.2 L12 20.5"
        stroke="#0f172a"
        strokeWidth="2"
        fill="none"
      />
      {/* hints of the outer black patches at the rim */}
      <path
        d="M25 6.5 L32 5 L39 6.5 M52.5 21 L57 27 M46 47 L40 53 M24 53 L18 47 M7 27 L11.5 21"
        stroke="#0f172a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

type Ball = {
  id: number
  left: string
  size: number
  duration: string
  delay: string
  drift: string
  spin: string
  opacity: string
}

export function FootballFlourish() {
  const [visible, setVisible] = useState(true)

  const balls = useMemo<Ball[]>(() => {
    const count = 11
    return Array.from({ length: count }, (_, i) => {
      const size = 20 + Math.round(Math.random() * 26) // 20 - 46px
      const driftPx = Math.round((Math.random() - 0.5) * 160) // -80 - 80px
      const spinDeg = 220 + Math.round(Math.random() * 360)
      return {
        id: i,
        left: `${Math.round(Math.random() * 96)}%`,
        size,
        duration: `${(5.5 + Math.random() * 3).toFixed(2)}s`,
        delay: `${(Math.random() * 1.6).toFixed(2)}s`,
        drift: `${driftPx}px`,
        spin: `${spinDeg}deg`,
        opacity: (0.14 + Math.random() * 0.12).toFixed(2), // 0.14 - 0.26
      }
    })
  }, [])

  useEffect(() => {
    // one-time flourish: unmount after the longest ball finishes
    const timer = setTimeout(() => setVisible(false), 10000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="football-ball"
          style={
            {
              "--ball-left": ball.left,
              "--ball-duration": ball.duration,
              "--ball-delay": ball.delay,
              "--ball-drift": ball.drift,
              "--ball-spin": ball.spin,
              "--ball-opacity": ball.opacity,
            } as React.CSSProperties
          }
        >
          <SoccerBall size={ball.size} />
        </div>
      ))}
    </div>
  )
}
