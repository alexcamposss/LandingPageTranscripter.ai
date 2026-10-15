import Image from 'next/image'
import { Countdown } from '@/components/countdown'
import { Reveal } from '@/components/reveal'
import { WaitlistForm } from '@/components/waitlist-form'

export function Notify() {
  return (
    <section id="notify" aria-labelledby="notify-title" className="py-20 text-center md:py-[84px]">
      <div className="mx-auto max-w-[1120px] px-5">
        <Reveal className="relative mx-auto max-w-[720px] overflow-hidden rounded-3xl border border-border bg-card px-5 py-12 sm:px-7">
          <Image
            src="/images/texture.png"
            alt=""
            fill
            sizes="720px"
            className="object-cover opacity-[0.12]"
            aria-hidden="true"
          />
          <div aria-hidden="true" className="bg-gradient-brand absolute inset-x-0 top-0 h-[3px]" />
          <div className="relative">
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">Mark your calendar</span>
            <h2
              id="notify-title"
              className="mb-3.5 mt-2.5 text-[clamp(28px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.03em]"
            >
              Coming October 15th
            </h2>
            <p className="mx-auto max-w-[620px] text-pretty leading-relaxed text-muted-foreground">
              Be the first to experience the future of transcription. Sign up and we&apos;ll tell you the moment we go
              live.
            </p>
            <Countdown />
            <WaitlistForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
