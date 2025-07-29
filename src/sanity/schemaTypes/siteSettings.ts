import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: () => '⚙️',
  groups: [
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'contact',
      title: 'Contact Information',
    },
    {
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    // General Settings
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'general',
      description: 'The main site title for SEO and browser tabs',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'url',
      title: 'Site URL',
      type: 'url',
      group: 'general',
      description: 'The main URL of the website',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: 'general',
      description: 'Brief description for SEO and social sharing',
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      group: 'general',
      description: 'Main company logo for the navbar',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      group: 'general',
      description: 'Image for social sharing previews. Recommended size: 1200x630px',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      group: 'general',
      description: 'Keywords for SEO',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      group: 'general',
      description: 'The author of the site, for SEO metadata',
    }),
    defineField({
      name: 'yearEstablished',
      title: 'Year Established',
      type: 'number',
      group: 'general',
      description: 'The year the company was founded',
    }),

    // Contact Information
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      description: 'Main contact phone number (e.g., 254-291-2403)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
      description: 'Main contact email address',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Business Address',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({
          name: 'street',
          title: 'Street Address',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'street2',
          title: 'Street Address (Line 2)',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'zipCode',
          title: 'ZIP Code',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // Navigation
    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      group: 'navigation',
      description: 'Main navigation menu items',
      of: [
        defineField({
          name: 'navItem',
          title: 'Navigation Item',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Link Text',
              type: 'string',
              validation: (rule) => rule.required().max(30),
            }),
            defineField({
              name: 'section',
              title: 'Target Section',
              type: 'string',
              description: 'Section ID to scroll to',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'section',
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(3).max(6),
    }),

    // Footer
    defineField({
      name: 'footerText',
      title: 'Footer Copyright Text',
      type: 'string',
      group: 'footer',
      description: 'Copyright text for the footer',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Navigation Links',
      type: 'array',
      group: 'footer',
      description: 'Links to legal pages like Privacy Policy or Terms of Service.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'legalPage' }],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'footer',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'logo',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'Site Settings',
        subtitle: subtitle || 'Global site configuration',
        media,
      }
    },
  },
})
