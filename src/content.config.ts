import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    context: z.string().default('Coursework / Project'),
    description: z.string(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    stack: z.array(z.string()).default([]),
    link: z.url(),
    order: z.number().default(99),
  }),
});

const skills = defineCollection({
  loader: file('./src/data/skills.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    alt: z.string(),
    category: z.string().default('Core'),
    description: z.string().default(''),
    order: z.number().default(99),
  }),
});

export const collections = {
  projects,
  skills,
};
