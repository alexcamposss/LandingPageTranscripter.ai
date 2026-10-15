import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn('flex items-center gap-2.5 font-bold tracking-tight', className)}>
      <span
        aria-hidden="true"
        className="bg-gradient-brand grid size-[26px] place-items-center rounded-lg"
      >
        <span className="size-2.5 rounded-full bg-primary-foreground" />
      </span>
      <span>
        Transcripter<span className="text-primary">.ai</span>
      </span>
    </a>
  )
}
