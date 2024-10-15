import { z, defineCollection } from 'astro:content';

export const collections = {
  noticias: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date(),
      image: z.string(),
      myslug: z.string(),
    }),
  }),
};
