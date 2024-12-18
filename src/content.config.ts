import { z, defineCollection } from 'astro:content';

const noticiasCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    myslug: z.string(),
  }),
});

export const collections = {
  noticias: noticiasCollection,
};