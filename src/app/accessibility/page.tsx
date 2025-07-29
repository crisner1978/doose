import LegalPage, { type LegalPageData } from '@/components/legal-page'
import { client } from '@/sanity/lib/client'
import { legalPageQuery } from '@/sanity/lib/queries'
import type { Metadata } from 'next'

// Fallback data for when Sanity content isn't available yet
const fallbackData = {
  title: 'Accessibility Statement',
  lastUpdated: '2025-01-15',
  introduction:
    'C.A. Doose & Company is committed to making our website accessible and user-friendly for all visitors, in accordance with the Texas Administrative Code §206.70 and the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.',
  sections: [
    {
      heading: 'Our Commitment',
      content: [
        {
          _type: 'block',
          _key: 'commitment',
          children: [
            {
              _type: 'span',
              text: 'We strive to ensure that our digital content is accessible to everyone, including people with disabilities. Our ongoing accessibility efforts aim to make our site usable by the widest possible audience, regardless of technology or ability.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Accessibility Standards',
      content: [
        {
          _type: 'block',
          _key: 'standards-intro',
          children: [
            {
              _type: 'span',
              text: 'This website has been designed and developed with accessibility in mind and is regularly tested to meet or exceed the following standards:',
            },
          ],
        },
        {
          _type: 'bulletList',
          items: [
            'Web Content Accessibility Guidelines (WCAG) 2.1, Level AA',
            'Section 508 of the Rehabilitation Act',
            'Texas Administrative Code §206.70 (where applicable)',
          ],
        },
      ],
    },
    {
      heading: 'Accessibility Features',
      content: [
        {
          _type: 'block',
          _key: 'features-intro',
          children: [
            {
              _type: 'span',
              text: 'Some of the ways we support accessibility include:',
            },
          ],
        },
        {
          _type: 'bulletList',
          items: [
            'Alt text for all meaningful images',
            'Keyboard-navigable menus and forms',
            'Sufficient color contrast for readability',
            'Resizable text and scalable content',
            'Screen reader compatibility',
            'Clear heading structure and navigation',
            'Focus indicators for interactive elements',
          ],
        },
      ],
    },
    {
      heading: 'Ongoing Efforts',
      content: [
        {
          _type: 'block',
          _key: 'ongoing-efforts',
          children: [
            {
              _type: 'span',
              text: 'We regularly review and update our site to improve accessibility. Our team undergoes training and conducts audits to maintain compliance and ensure usability for individuals with disabilities.',
            },
          ],
        },
      ],
    },
  ],
  contactInfo: {
    heading: 'Need Help or Encounter an Issue?',
    description:
      'If you experience any difficulty accessing content on this website, or if you have suggestions to improve accessibility, please contact us:',
    contactMethods: [
      {
        label: 'Accessibility Contact',
        value: 'Department of Marketing: Flintrock Builders',
      },
      {
        label: 'Email',
        value: 'marketing@flintrockbuilders.com',
      },
      {
        label: 'Phone',
        value: '254-291-2403',
      },
    ],
  },
} satisfies LegalPageData

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await client.fetch(legalPageQuery, { slug: 'accessibility' })

    return {
      title: data?.seoTitle || data?.title || 'Accessibility Statement',
      description: data?.seoDescription || 'Accessibility statement for C.A. Doose & Company',
    }
  } catch (_error) {
    return {
      title: 'Accessibility Statement',
      description: 'Accessibility statement for C.A. Doose & Company',
    }
  }
}

export default async function AccessibilityPage() {
  let data = fallbackData

  try {
    const sanityData = await client.fetch(legalPageQuery, { slug: 'accessibility' })
    if (sanityData) {
      data = sanityData
    }
  } catch (error) {
    console.log('Using fallback accessibility data:', error)
  }

  return <LegalPage data={data} />
}
