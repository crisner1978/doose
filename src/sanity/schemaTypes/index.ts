import type { SchemaTypeDefinition } from 'sanity'
import { aboutSection } from './aboutSection'
import { executiveTeamSection } from './executiveTeamSection'
import { heroSection } from './heroSection'
import { homePage } from './homePage'
import { legalPage } from './legalPage'
import { partnerBrand } from './partnerBrand'
import { partnerBrandsSection } from './partnerBrandsSection'
import { siteSettings } from './siteSettings'
import { teamMember } from './teamMember'
import { timelineEvent } from './timelineEvent'
import { timelineSection } from './timelineSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types
    homePage,
    siteSettings,
    partnerBrand,
    timelineEvent,
    teamMember,
    legalPage,

    // Object types
    heroSection,
    aboutSection,
    partnerBrandsSection,
    executiveTeamSection,
    timelineSection,
  ],
}
