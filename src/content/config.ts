import { z, defineCollection } from 'astro:content';

const navigation = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    label: z.string(),
    url: z.string(),
    order: z.number(),
  })
});

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
  })
})

const socialLinks = defineCollection({
  type: 'data',
  schema: z.object({
    linkedin: z.string().url(),
    github: z.string().url(),
    email: z.string().url(),
  })
})

export const collections = {
  navigation,
  hero,
  'social-links': socialLinks
};
