import { AboutSection } from '@/components/about-section'
import { ExecutiveTeamSection } from '@/components/executive-team-section'
import { HeroSection } from '@/components/hero-section'
import { PartnerBrandsSection } from '@/components/partner-brands-section'
import { TimelineSection } from '@/components/timeline-section'
import { HomePageQueryResultPageBuilderNonNullable } from '@/sanity/helper-types'

const SECTION_COMPONENTS = {
  heroSection: HeroSection,
  aboutSection: AboutSection,
  partnerBrandsSection: PartnerBrandsSection,
  executiveTeamSection: ExecutiveTeamSection,
  timelineSection: TimelineSection,
} as const

export function PageBuilder({ sections }: { sections: HomePageQueryResultPageBuilderNonNullable }) {
  return (
    <>
      {sections.map((section) => {
        const Component = SECTION_COMPONENTS[section._type as keyof typeof SECTION_COMPONENTS]
        if (!Component) return null

        return <Component key={section._key} data={section as never} />
      })}
    </>
  )
}
