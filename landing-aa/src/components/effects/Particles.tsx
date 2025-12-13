import { useEffect, useState } from 'react'

const SYMBOLS = ['{', '}', '→', '⚡', '0', '1', '<', '>', '/', '○', '●', '◇']

interface Particle {
  id: number
  symbol: string
  left: number
  size: number
  duration: number
  delay: number
}

export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      left: Math.random() * 100,
      size: Math.random() * 16 + 12,
      duration: Math.random() * 12 + 12,
      delay: Math.random() * 8,
    }))

    setParticles(initialParticles)
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute font-mono text-accent opacity-0"
          style={{
            left: `${particle.left}%`,
            fontSize: `${particle.size}px`,
            animation: `float-up ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.symbol}
        </span>
      ))}
    </div>
  )
}
