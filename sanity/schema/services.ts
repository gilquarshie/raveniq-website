import { defineType, defineField } from 'sanity'

export const Services = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: () => '💻',

  fields: [
    defineField({
      name: 'main_image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'other_images',
      title: 'Other Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'isPremium',
      title: 'Is Premium Service?',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'features',
      title: "Features / What's Included",
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Audience Title', type: 'string' },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'pricingPlans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Plan Name', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'isPopular',
              title: 'Is Popular Plan?',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Benefit Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
        name: 'delivery_process',
        title: 'Delivery Process',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                { name: 'step', title: 'Step', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
                { name: 'key_words', title: 'Key Words', type: 'array', of: [{ type: 'string' }] }
            ]
        }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        {
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
        },
        {
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'main_image', // ✅ FIXED
    },
  },
})
