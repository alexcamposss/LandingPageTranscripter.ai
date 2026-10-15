import Image from 'next/image'
import { Headphones, Rocket, Video } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const creators = [
  {
    icon: Headphones,
    title: 'Podcasters',
    text: 'Clean transcripts for your whole library: show notes, blog posts and quotes in a click.',
    image: '/images/podcaster.png',
    alt: 'Podcaster recording an episode with headphones and a studio microphone',
  },
  {
    icon: Video,
    title: 'YouTubers',
    text: 'Subtitles and text versions that help you reach more people, faster.',
    image: '/images/youtuber.png',
    alt: 'Camera set up on a tripod in a dark video studio',
  },
  {
    icon: Rocket,
    title: 'Product teams',
    text: 'Turn teasers and demos into written content for every channel.',
    image: '/images/hero-mic.png',
    alt: 'Studio microphone with a sound waveform',
  },
]

export function Creators() {
  return (
    <section id="creators" aria-labelledby="creators-title" className="py-20 md:py-[84px]">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionHeading
          id="creators-title"
          eyebrow="For creators"
          title="Built for the people who create what matters."
          description="Recording your next episode, publishing a video or launching a teaser — we handle the typing."
        />
        <div className="mt-10 grid gap-[18px] md:grid-cols-3">
          {creators.map((creator, i) => (
            <Reveal key={creator.title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-[18px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={creator.image}
                    alt={creator.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-[26px] pt-4">
                  <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <creator.icon className="size-[22px]" aria-hidden="true" />
                  </div>
                  <h3 className="mb-1.5 text-lg font-semibold">{creator.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{creator.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
