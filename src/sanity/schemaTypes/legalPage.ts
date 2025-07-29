import { defineField, defineType, defineArrayMember } from 'sanity'
import { FileText } from 'lucide-react'

export const legalPage = defineType({
  name: 'legalPage',
  title: 'Legal Page',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      description: 'The main title of the legal page (e.g., "Privacy Policy", "Accessibility Statement")',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      description: 'URL path for this page (e.g., "privacy", "accessibility")',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Date',
      description: 'When this page was last updated for legal compliance',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction Text',
      description: 'Opening paragraph that appears below the main title',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      description: 'The main content sections of the legal page',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'section',
          title: 'Content Section',
          fields: [
            defineField({
              name: 'heading',
              title: 'Section Heading',
              description: 'The title for this section',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Section Content',
              description: 'The main text content for this section',
              type: 'array',
              of: [
                { type: 'block' },
                {
                  type: 'object',
                  name: 'bulletList',
                  title: 'Bullet List',
                  fields: [
                    defineField({
                      name: 'items',
                      title: 'List Items',
                      type: 'array',
                      of: [{ type: 'string' }],
                    }),
                  ],
                  preview: {
                    select: {
                      items: 'items',
                    },
                    prepare(selection) {
                      const { items } = selection
                      return {
                        title: 'Bullet List',
                        subtitle: `${items?.length || 0} items`,
                      }
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'heading',
            },
            prepare(selection) {
              const { title } = selection
              return {
                title: title || 'Untitled Section',
                media: FileText,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      description: 'Contact details for questions about this legal page',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'heading',
          title: 'Contact Section Heading',
          description: 'Heading for the contact section (e.g., "Need Help or Encounter an Issue?")',
          type: 'string',
          initialValue: 'Contact Us',
        }),
        defineField({
          name: 'description',
          title: 'Contact Description',
          description: 'Text explaining when to contact regarding this page',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'contactMethods',
          title: 'Contact Methods',
          description: 'Different ways to contact regarding this page',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'contactMethod',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Contact Label',
                  description: 'Label for this contact method (e.g., "Email", "Phone")',
                  type: 'string',
                }),
                defineField({
                  name: 'value',
                  title: 'Contact Value',
                  description: 'The actual contact information',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      description: 'Title for search engines (leave blank to use page title)',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      description: 'Description for search engines and social media',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      description: 'Whether this page is live on the website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      lastUpdated: 'lastUpdated',
      isPublished: 'isPublished',
    },
    prepare(selection) {
      const { title, slug, lastUpdated, isPublished } = selection
      return {
        title: title,
        subtitle: `/${slug || 'no-slug'} ${!isPublished ? '(Draft)' : ''} ${lastUpdated ? `• Updated: ${lastUpdated}` : ''}`,
        media: FileText,
      }
    },
  },
  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Last Updated',
      name: 'lastUpdatedDesc',
      by: [{ field: 'lastUpdated', direction: 'desc' }],
    },
  ],
}) 
