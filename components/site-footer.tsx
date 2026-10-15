import { Logo } from '@/components/brand'

const socials = [
  { href: 'https://youtube.com', label: 'YouTube' },
  { href: 'https://x.com', label: 'X' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://instagram.com', label: 'Instagram' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-5 px-5">
        <div>
          <Logo className="text-foreground" />
          <p className="mt-2">{'Speech → Text → Faster. Clean. Technical. Human.'}</p>
        </div>
        <nav aria-label="Social media">
          <ul className="flex flex-wrap gap-[18px]">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="w-full">© 2026 Transcripter.ai. All rights reserved.</p>
      </div>
    </footer>
  )
}
