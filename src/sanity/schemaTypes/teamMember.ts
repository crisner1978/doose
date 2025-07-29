import { Users } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: Users,
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'Full biography of the team member',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headshot',
      title: 'Professional Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which team member appears (lower numbers first)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'isActive',
      title: 'Active Team Member',
      type: 'boolean',
      description: 'Only active team members will be displayed on the website',
      initialValue: true,
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Executive', value: 'executive' },
          { title: 'Operations', value: 'operations' },
          { title: 'Sales', value: 'sales' },
          { title: 'Finance', value: 'finance' },
          { title: 'Development', value: 'development' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'executive',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'email',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Notable achievements, awards, or recognitions',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'institution',
              title: 'Institution',
              type: 'string',
            }),
            defineField({
              name: 'degree',
              title: 'Degree',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Graduation Year',
              type: 'number',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'headshot',
      order: 'order',
    },
    prepare(selection) {
      const { title, subtitle, order } = selection
      return {
        title: title,
        subtitle: `${subtitle} (Order: ${order})`,
        media: selection.media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})
