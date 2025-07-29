import { defineField, defineType } from 'sanity'

export const executiveTeamSection = defineType({
  name: 'executiveTeamSection',
  title: 'Executive Team Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The title for the executive team section (e.g., "The Power Behind The Brand")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
      description: 'The subtitle for the executive team section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      description: 'Select the team members to display in this section.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'closingText',
      title: 'Closing Text',
      type: 'object',
      fields: [
        defineField({
          name: 'line1',
          title: 'First Line',
          type: 'text',
          description: 'The first line of the closing text.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'line2',
          title: 'Second Line',
          type: 'text',
          description: 'The second line of the closing text.',
          validation: (rule) => rule.required(),
        }),
      ],
      description: 'The final paragraphs at the bottom of the section.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Executive Team Section',
      }
    },
  },
})
