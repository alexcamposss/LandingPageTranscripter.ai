'use client'

import { useEffect, useState } from 'react'

const LAUNCH = new Date(2026, 9, 15, 0, 0, 0).getTime()

const pad = (n: number) => String(n).padStart(2, '0')

function getParts(now: number) {
  const total = Math.floor(Math.max(0, LAUNCH - now) / 1000)
  return [
    { label: 'Days', value: pad(Math.floor(total / 86400)) },
    { label: 'Hours', value: pad(Math.floor((total % 86400) / 3600)) },
    { label: 'Min', value: pad(Math.floor((total % 3600) / 60)) },
    { label: 'Sec', value: pad(total % 60) },
  ]
}

const placeholder = ['Days', 'Hours', 'Min', 'Sec'].map((label) => ({ label, value: '--' }))

export function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const parts = now === null ? placeholder : getParts(now)

  return (
    <div role="timer" aria-label="Time until launch" className="my-8 grid grid-cols-4 gap-3">
      {parts.map((part) => (
        <div key={part.label} className="rounded-[14px] border border-border bg-surface px-1 py-4">
          <span className="block text-[clamp(26px,5vw,40px)] font-bold tabular-nums tracking-tight">{part.value}</span>
          <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{part.label}</span>
        </div>
      ))}
    </div>
  )
}
