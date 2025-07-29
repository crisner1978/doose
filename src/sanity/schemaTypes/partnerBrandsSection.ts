import { defineField, defineType } from 'sanity'

export const partnerBrandsSection = defineType({
  name: 'partnerBrandsSection',
  title: 'Partner Brands Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The title for the partner brands section (e.g., "Our Partner Brands")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
      description: 'The subtitle for the partner brands section (e.g., "Stronger Together")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brands',
      title: 'Partner Brands',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'partnerBrand' }] }],
      description: 'Select the partner brands to display in this section.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      description: 'The main paragraph of text for the section.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
          description: 'The text displayed above the button (e.g., "Ready to experience the C.A. Doose difference?")',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'The text on the button itself (e.g., "Connect with Our Team")',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Partner Brands Section',
      }
    },
  },
})
