'use client'

import { PortableText, type PortableTextReactComponents } from 'next-sanity'

interface ContactMethod {
  label?: string
  value?: string
}

interface ContactInfo {
  heading?: string
  description?: string
  contactMethods?: ContactMethod[]
}

interface Section {
  heading: string
  content: (
    | {
        _type: 'block'
        _key?: string
        children?: { _type: string; text: string }[]
      }
    | {
        _type: 'bulletList'
        items?: string[]
      }
  )[]
}

export interface LegalPageData {
  title: string
  lastUpdated?: string
  introduction?: string
  sections?: Section[]
  contactInfo?: ContactInfo
}

interface LegalPageProps {
  data: LegalPageData
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className='mb-4 text-gray-700 leading-relaxed'>{children}</p>,
    h1: ({ children }) => <h1 className='mb-6 font-bold text-3xl text-gray-900'>{children}</h1>,
    h2: ({ children }) => <h2 className='mb-4 font-semibold text-2xl text-gray-900'>{children}</h2>,
    h3: ({ children }) => <h3 className='mb-3 font-semibold text-gray-900 text-xl'>{children}</h3>,
  },
  marks: {
    strong: ({ children }) => <strong className='font-semibold text-gray-900'>{children}</strong>,
    em: ({ children }) => <em className='italic'>{children}</em>,
    link: ({ children, value }) => (
      <a
        className='cursor-pointer text-blue-600 underline hover:text-blue-800'
        href={value?.href}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        target={value?.blank ? '_blank' : undefined}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className='mb-4 ml-6 list-disc space-y-2'>{children}</ul>,
    number: ({ children }) => <ol className='mb-4 ml-6 list-decimal space-y-2'>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className='text-gray-700 leading-relaxed'>{children}</li>,
    number: ({ children }) => <li className='text-gray-700 leading-relaxed'>{children}</li>,
  },
  types: {
    bulletList: ({ value }) => (
      <ul className='mb-4 ml-6 list-disc space-y-2'>
        {value.items?.map((item: string, index: number) => (
          <li className='text-gray-700 leading-relaxed' key={`${crypto.randomUUID()}-${index}`}>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
}

export default function LegalPage({ data }: LegalPageProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className='mx-auto max-w-4xl px-4 py-16 pt-32'>
      <article className='prose prose-lg max-w-none'>
        {/* Header */}
        <header className='mb-8'>
          <h1 className='mb-4 font-bold text-4xl text-gray-900'>{data.title}</h1>
          {data.lastUpdated && <p className='text-gray-600 text-sm'>Last updated: {formatDate(data.lastUpdated)}</p>}
        </header>

        {/* Introduction */}
        {data.introduction && (
          <div className='mb-8'>
            <p className='text-gray-700 text-lg leading-relaxed'>{data.introduction}</p>
          </div>
        )}

        {/* Sections */}
        {data.sections?.map((section, index) => (
          <section className='mb-8' key={`${crypto.randomUUID()}-${index}`}>
            <h2 className='mb-4 font-semibold text-2xl text-gray-900'>{section.heading}</h2>
            <div className='space-y-4'>
              <PortableText components={portableTextComponents} value={section.content} />
            </div>
          </section>
        ))}

        {/* Contact Information */}
        {data.contactInfo && (
          <section className='mt-12 rounded-lg bg-gray-50 p-6'>
            <h2 className='mb-4 font-semibold text-2xl text-gray-900'>{data.contactInfo.heading || 'Contact Us'}</h2>

            {data.contactInfo.description && (
              <p className='mb-4 text-gray-700 leading-relaxed'>{data.contactInfo.description}</p>
            )}

            {data.contactInfo.contactMethods && data.contactInfo.contactMethods.length > 0 && (
              <div className='space-y-2'>
                {data.contactInfo.contactMethods.map((method, index) => (
                  <div className='flex flex-col sm:flex-row' key={`${crypto.randomUUID()}-${index}`}>
                    {method.label && <span className='font-medium text-gray-900 sm:w-32'>{method.label}:</span>}
                    {method.value && <span className='text-gray-700'>{method.value}</span>}
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </article>
    </div>
  )
}
 