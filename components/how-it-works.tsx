import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  { title: 'Upload', text: 'Drop in an audio or video file, or paste a link.' },
  { title: 'Transcribe', text: 'Our AI converts speech to text and tells voices apart.' },
  { title: 'Use it', text: 'Edit, search, export and share your transcript anywhere.' },
]

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="bg-surface py-20 md:py-[84px]">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionHeading id="how-title" eyebrow="How it works" title="Three steps. Zero hassle." />
        <ol className="mt-10 grid gap-[18px] md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 100} className="h-full border-l-2 border-border p-[26px]">
                <span className="text-[34px] font-bold text-primary/85" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="my-1.5 text-lg font-semibold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
