import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page, used for internal reference in the CMS.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      description: 'Add, reorder, and configure the sections of the page.',
      of: [
        { type: 'heroSection' },
        { type: 'aboutSection' },
        { type: 'partnerBrandsSection' },
        { type: 'executiveTeamSection' },
        { type: 'timelineSection' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Home Page',
      }
    },
  },
})
