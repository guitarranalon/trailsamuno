import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'zod';

const noticiasCollection = defineCollection({
  loader: glob({
    base: './src/content/noticias',
    pattern: '**/*.{md,mdx}',
  }),  
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    myslug: z.string(),
  }),
});

export const collections = {
  noticias: noticiasCollection,
};
