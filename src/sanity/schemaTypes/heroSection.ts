import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'The main headline (e.g., "Building Texas")',
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle below the main title (e.g., "Since 1895")',
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Text for the badge above the title (e.g., "Established 1895")',
      validation: (rule) => rule.required().max(30),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main descriptive text below the title',
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
      description: 'The inspiring quote in italics',
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (rule) => rule.required().max(30),
        }),
        defineField({
          name: 'action',
          title: 'Button Action',
          type: 'string',
          options: {
            list: [
              { title: 'Scroll to Timeline', value: 'timeline' },
              { title: 'Scroll to About', value: 'about' },
              { title: 'Scroll to Brands', value: 'brands' },
              { title: 'Scroll to Team', value: 'team' },
              { title: 'External Link', value: 'external' },
            ],
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'externalUrl',
          title: 'External URL',
          type: 'url',
          description: 'Only required if action is "External Link"',
          hidden: ({ parent }) => parent?.action !== 'external',
        }),
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (rule) => rule.required().max(30),
        }),
        defineField({
          name: 'action',
          title: 'Button Action',
          type: 'string',
          options: {
            list: [
              { title: 'Scroll to Timeline', value: 'timeline' },
              { title: 'Scroll to About', value: 'about' },
              { title: 'Scroll to Brands', value: 'brands' },
              { title: 'Scroll to Team', value: 'team' },
              { title: 'External Link', value: 'external' },
            ],
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'externalUrl',
          title: 'External URL',
          type: 'url',
          description: 'Only required if action is "External Link"',
          hidden: ({ parent }) => parent?.action !== 'external',
        }),
      ],
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      description: 'MP4 video file for the hero background',
      options: {
        accept: 'video/*',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || 'Hero Section',
        subtitle: subtitle || 'No subtitle set',
      }
    },
  },
})
