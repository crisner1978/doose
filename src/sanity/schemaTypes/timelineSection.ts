import { defineField, defineType } from 'sanity'

export const timelineSection = defineType({
  name: 'timelineSection',
  title: 'Timeline Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The title for the timeline section (e.g., "Our History")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle below the main title.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'events',
      title: 'Timeline Events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'timelineEvent' }] }],
      description: 'Select the timeline events to display in this section.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'highlights',
      title: 'Timeline Highlights',
      type: 'object',
      fields: [
        defineField({
          name: 'milestoneLabel',
          title: 'Milestone Label',
          type: 'string',
          description: 'Label for major milestones (e.g., "Major Milestones")',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'legacyLabel',
          title: 'Legacy Label',
          type: 'string',
          description: 'Label for the continuing legacy (e.g., "Legacy Continues")',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'range',
          title: 'Date Range',
          type: 'string',
          description: 'The date range display (e.g., "1895 — 2025")',
          validation: (rule) => rule.required(),
        }),
      ],
      description: 'Labels for the visual highlights bar below the carousel.',
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'line1',
          title: 'First Line',
          type: 'text',
          description: 'The first line of the CTA text (e.g., "Ready to be part of the next chapter?")',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'line2',
          title: 'Second Line',
          type: 'text',
          description: 'The second line of the CTA text (e.g., "Join us in continuing...")',
          validation: (rule) => rule.required(),
        }),
      ],
      description: 'The final call to action at the bottom of the section.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Timeline Section',
      }
    },
  },
})
