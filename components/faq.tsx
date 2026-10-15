import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const questions = [
  {
    q: 'When does Transcripter.ai launch?',
    a: "We go live on October 15th. Sign up above and you'll be notified the moment it opens.",
  },
  {
    q: 'Can it tell different speakers apart?',
    a: 'Yes. Transcripter.ai detects multiple voices and labels each speaker in the transcript.',
  },
  { q: 'What can I transcribe?', a: 'Podcasts, videos, meetings and product teasers — audio and video files alike.' },
  {
    q: 'Who is it for?',
    a: 'Professional podcasters, YouTubers and multinational companies that need fast, reliable transcripts.',
  },
]

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 md:py-[84px]">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions, answered." />
        <div className="mt-8 max-w-[760px]">
          {questions.map((item) => (
            <details key={item.q} className="group border-b border-border py-[18px]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
