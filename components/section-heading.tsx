import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
  className?: string
}) {
  return (
    <div className={className}>
      <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">{eyebrow}</span>
      <h2
        id={id}
        className="mb-3.5 mt-2.5 text-balance text-[clamp(28px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.03em]"
      >
        {title}
      </h2>
      {description ? (
        <p className={cn('max-w-[620px] text-pretty leading-relaxed text-muted-foreground')}>{description}</p>
      ) : null}
    </div>
  )
}
