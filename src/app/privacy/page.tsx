import LegalPage, { type LegalPageData } from '@/components/legal-page'
import { client } from '@/sanity/lib/client'
import { legalPageQuery } from '@/sanity/lib/queries'
import type { Metadata } from 'next'

// Fallback data for when Sanity content isn't available yet
const fallbackData = {
  title: 'Privacy Policy',
  lastUpdated: '2025-01-15',
  introduction:
    'At C.A. Doose & Company we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Statement outlines how we collect, use, disclose, and safeguard your information when you visit our website.',
  sections: [
    {
      heading: 'Information We Collect',
      content: [
        {
          _type: 'block',
          _key: 'info-collect',
          children: [
            {
              _type: 'span',
              text: 'We may collect the following types of information:',
            },
          ],
        },
        {
          _type: 'bulletList',
          items: [
            'Personal Information: Name, email address, phone number, mailing address, or other information you voluntarily provide via contact forms, newsletter signups, or purchases.',
            'Non-Personal Information: Browser type, IP address, operating system, referring website, and other technical data collected via cookies or analytics tools.',
          ],
        },
      ],
    },
    {
      heading: 'How We Use Your Information',
      content: [
        {
          _type: 'block',
          _key: 'how-we-use',
          children: [
            {
              _type: 'span',
              text: 'We use the information we collect to:',
            },
          ],
        },
        {
          _type: 'bulletList',
          items: [
            'Respond to inquiries and customer service requests',
            'Process transactions or provide services you request',
            "Send marketing or promotional emails (if you've opted in)",
            "Improve our website's performance and user experience",
          ],
        },
      ],
    },
    {
      heading: 'Sharing Your Information',
      content: [
        {
          _type: 'block',
          _key: 'sharing-info',
          children: [
            {
              _type: 'span',
              text: 'We do not sell, rent, or trade your personal information to third parties. We may share your information with trusted third-party service providers who assist in operating our website, conducting our business, or servicing you—provided they agree to keep this information confidential.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Cookies and Tracking Technologies',
      content: [
        {
          _type: 'block',
          _key: 'cookies',
          children: [
            {
              _type: 'span',
              text: 'Our site may use cookies, pixels, and similar technologies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies in your browser settings, but doing so may affect the functionality of the site.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Data Security',
      content: [
        {
          _type: 'block',
          _key: 'data-security',
          children: [
            {
              _type: 'span',
              text: 'We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Your Rights and Choices',
      content: [
        {
          _type: 'block',
          _key: 'rights-choices',
          children: [
            {
              _type: 'span',
              text: 'You may opt out of receiving promotional communications from us at any time by following the unsubscribe instructions in our emails or contacting us directly. You may also request to access, correct, or delete your personal data, subject to applicable laws.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Changes to This Policy',
      content: [
        {
          _type: 'block',
          _key: 'policy-changes',
          children: [
            {
              _type: 'span',
              text: 'We may update this Privacy Statement periodically. Any changes will be posted on this page with an updated effective date.',
            },
          ],
        },
      ],
    },
  ],
  contactInfo: {
    heading: 'Contact Us',
    description: 'If you have questions about this Privacy Statement or how we handle your data, please contact us at:',
    contactMethods: [
      {
        label: 'Company',
        value: 'C.A. Doose & Company',
      },
      {
        label: 'Phone',
        value: '254-291-2403',
      },
      {
        label: 'Address',
        value: 'Georgetown, Texas',
      },
    ],
  },
} satisfies LegalPageData

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await client.fetch(legalPageQuery, { slug: 'privacy' })

    return {
      title: data?.seoTitle || data?.title || 'Privacy Policy',
      description: data?.seoDescription || 'Privacy policy for C.A. Doose & Company',
    }
  } catch (_error) {
    return {
      title: 'Privacy Policy',
      description: 'Privacy policy for C.A. Doose & Company',
    }
  }
}

export default async function PrivacyPage() {
  let data = fallbackData

  try {
    const sanityData = await client.fetch(legalPageQuery, { slug: 'privacy' })
    if (sanityData) {
      data = sanityData
    }
  } catch (error) {
    console.log('Using fallback privacy data:', error)
  }

  return <LegalPage data={data} />
}
