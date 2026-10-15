import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    title: 'Meetings & calls',
    items: ['Searchable records of every discussion', 'Speakers identified automatically', 'Share notes in seconds'],
  },
  {
    title: 'Communications',
    items: ['Accessible content for all audiences', 'Consistent, professional output', 'Faster turnaround for marketing and PR'],
  },
]

export function Business() {
  return (
    <section id="business" aria-labelledby="business-title" className="bg-surface py-20 md:py-[84px]">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionHeading
          id="business-title"
          eyebrow="For business"
          title="Professional transcripts for global companies."
          description="Streamline internal and external communication across teams, markets and languages."
        />
        <div className="mt-10 grid gap-[18px] md:grid-cols-[1.1fr_1fr]">
          <Reveal className="relative min-h-64 overflow-hidden rounded-[18px] border border-border md:row-span-2">
            <Image
              src="/images/business.png"
              alt="Glass-walled conference room in a modern office"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">
              From the boardroom to every market you operate in.
            </p>
          </Reveal>
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <article className="h-full rounded-[18px] border border-border bg-card p-[26px] transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-3.5 text-[15px] text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 py-1.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
