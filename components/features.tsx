import { Clapperboard, FileDown, Search, Target, Users, Zap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const features = [
  { icon: Users, title: 'Multiple voices', text: 'Detects and labels each speaker automatically — perfect for interviews, panels and meetings.' },
  { icon: Zap, title: 'Lightning fast', text: 'Upload a file or paste a link and get your transcript in minutes, not hours.' },
  { icon: Target, title: 'Accurate & reliable', text: 'Clean punctuation and consistent results, even with accents and background noise.' },
  { icon: Clapperboard, title: 'Audio & video', text: 'Podcasts, YouTube videos, calls and product teasers — one tool for all of them.' },
  { icon: Search, title: 'Boost your SEO', text: 'Turn content into searchable text that helps new audiences find you.' },
  { icon: FileDown, title: 'Export anywhere', text: 'Copy, edit and download your transcripts in the formats your workflow needs.' },
]

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="py-20 md:py-[84px]">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionHeading
          id="features-title"
          eyebrow="Features"
          title="Everything you need to go from voice to text."
          description="Transcripter.ai saves you hours of manual work so you can focus on what you do best."
        />
        <div className="mt-10 grid gap-[18px] md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 80}>
              <article className="h-full rounded-[18px] border border-border bg-card p-[26px] transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <feature.icon className="size-[22px]" aria-hidden="true" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold">{feature.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
