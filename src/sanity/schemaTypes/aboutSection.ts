import { defineField, defineType } from 'sanity'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'Section Badge',
      type: 'string',
      description: 'Small badge text above the title (e.g., "Since 1895")',
      validation: (rule) => rule.required().max(30),
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main section heading (e.g., "C.A. Doose & Company")',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle below the main title (e.g., "A Legacy of Excellence")',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'foundingStory',
      title: 'Founding Story',
      type: 'text',
      description: 'Paragraph about the company founding in 1895',
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'currentMission',
      title: 'Current Mission',
      type: 'text',
      description: 'Paragraph about what the company does today',
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'quote',
      title: 'Company Quote',
      type: 'text',
      description: 'Inspiring company quote in the blockquote',
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [
        defineField({
          name: 'value',
          title: 'Value',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Value Title',
              type: 'string',
              validation: (rule) => rule.required().max(30),
            }),
            defineField({
              name: 'description',
              title: 'Value Description',
              type: 'string',
              validation: (rule) => rule.required().max(100),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(3).max(3),
      description: 'Exactly 3 company values (Quality, Integrity, Innovation)',
    }),
    defineField({
      name: 'teamImage',
      title: 'Team Photo',
      type: 'image',
      description: 'Executive team photo for the right side',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Company Statistics',
      type: 'array',
      of: [
        defineField({
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'The numeric value or text for the stat (e.g., "129+")',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'The description for the stat (e.g., "Years of Excellence")',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'teamImage',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'About Section',
        subtitle: subtitle || 'No subtitle set',
        media,
      }
    },
  },
})
