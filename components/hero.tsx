import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const bars = Array.from({ length: 48 }, (_, i) => ({
  delay: `${(i * -0.07).toFixed(2)}s`,
  duration: `${(0.8 + Math.abs(Math.sin(i)) * 0.9).toFixed(2)}s`,
}))

const transcript = [
  { speaker: 'Speaker 1', tone: 'primary', text: "Welcome back to the show. Today we're talking about the future of voice." },
  { speaker: 'Speaker 2', tone: 'highlight', text: 'Thanks for having me — I think transcription is about to change completely.' },
  { speaker: 'Speaker 1', tone: 'primary', text: "Let's dive right in." },
] as const

const stats = [
  { value: 'Multi-voice', label: 'Speaker detection' },
  { value: 'Minutes', label: 'Not hours to transcribe' },
  { value: 'Audio + Video', label: 'Any common format' },
  { value: 'Searchable', label: 'SEO-ready text' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-[70px] pt-16 md:pt-[84px]">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-x-[-10%] top-[-20%] h-[520px]" />
      <div className="relative mx-auto max-w-[1120px] px-5">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] text-muted-foreground">
              <span className="pulse-dot size-2 rounded-full bg-primary" aria-hidden="true" />
              Launching October 15
            </span>
            <h1 className="my-5 text-balance text-[clamp(38px,6vw,66px)] font-bold leading-[1.04] tracking-[-0.035em]">
              Turn your audio into <span className="text-gradient">text, instantly.</span>
            </h1>
            <p className="max-w-[540px] text-pretty text-lg leading-relaxed text-muted-foreground">
              Accurate, fast transcripts for podcasts, videos and meetings — with automatic detection of every
              speaker. Built for creators, ready for global teams.
            </p>
            <div className="mb-3.5 mt-7 flex flex-wrap gap-3">
              <a
                href="#notify"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-[22px] py-3 text-[15px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_var(--primary)]"
              >
                Be the first to know
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center rounded-full border border-border px-[22px] py-3 text-[15px] font-semibold transition-colors hover:border-primary"
              >
                See how it works
              </a>
            </div>
            <p className="text-[13px] text-muted-foreground">Free early-access updates. No spam, unsubscribe anytime.</p>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-6 overflow-hidden rounded-[32px]">
              <Image
                src="/images/hero-mic.png"
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div
              aria-label="Live transcription preview"
              role="figure"
              className="relative rounded-[20px] border border-border bg-card/90 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] backdrop-blur-sm"
            >
              <div className="mb-3.5 flex items-center justify-between text-[13px] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-destructive" aria-hidden="true" />
                  Recording — episode_42.mp3
                </span>
                <span className="tabular-nums">00:12</span>
              </div>
              <div className="mb-4 flex h-16 items-center gap-[3px]" aria-hidden="true">
                {bars.map((bar, i) => (
                  <span
                    key={i}
                    className="wave-bar flex-1 rounded-[3px]"
                    style={{ animationDelay: bar.delay, animationDuration: bar.duration }}
                  />
                ))}
              </div>
              {transcript.map((line, i) => (
                <p
                  key={i}
                  className="transcript-line my-2.5 flex gap-2.5 text-[14.5px] leading-relaxed"
                  style={{ animationDelay: `${0.4 + i * 1.2}s` }}
                >
                  <span
                    className={
                      line.tone === 'primary'
                        ? 'mt-[3px] h-fit shrink-0 rounded-md bg-primary/15 px-2 py-[3px] text-[11px] font-bold text-primary'
                        : 'mt-[3px] h-fit shrink-0 rounded-md bg-highlight/15 px-2 py-[3px] text-[11px] font-bold text-highlight'
                    }
                  >
                    {line.speaker}
                  </span>
                  <span>{line.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-14">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col-reverse bg-card p-5 text-center">
                <dt className="text-[13px] text-muted-foreground">{stat.label}</dt>
                <dd className="text-2xl font-bold tracking-tight text-primary md:text-[28px]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
