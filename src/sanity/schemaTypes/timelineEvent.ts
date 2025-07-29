import { defineField, defineType } from 'sanity'

export const timelineEvent = defineType({
  name: 'timelineEvent',
  title: 'Timeline Event',
  type: 'document',
  icon: () => '📅',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'The year this event took place',
      validation: (rule) => rule.required().min(1800).max(2030),
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'Brief title for this milestone',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of what happened in this year',
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      description: 'Optional image representing this milestone',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isHighlight',
      title: 'Is Highlight Event',
      type: 'boolean',
      description: 'Mark as a major milestone for special styling',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this event (lower numbers first)',
      validation: (rule) => rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Year (Ascending)',
      name: 'yearAsc',
      by: [{ field: 'year', direction: 'asc' }],
    },
    {
      title: 'Year (Descending)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'image',
      isHighlight: 'isHighlight',
    },
    prepare(selection) {
      const { title, subtitle, media, isHighlight } = selection
      return {
        title: `${subtitle}: ${title}`,
        subtitle: isHighlight ? '⭐ Highlight Event' : 'Timeline Event',
        media,
      }
    },
  },
})
