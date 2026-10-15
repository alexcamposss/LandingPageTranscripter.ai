import { Business } from '@/components/business'
import { Creators } from '@/components/creators'
import { Faq } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Notify } from '@/components/notify'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Creators />
        <Business />
        <Notify />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
