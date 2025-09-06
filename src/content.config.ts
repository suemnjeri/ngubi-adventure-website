// src/content/config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const EVENTS_PATH = "src/data/events";

const blog = defineCollection({
  // REMOVE THIS LINE: type: 'content',
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const events = defineCollection({
  // REMOVE THIS LINE: type: 'content',
  loader: glob({ pattern: "**/[^_]*.md", base: `./${EVENTS_PATH}` }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    eventDate: z.date(),
    eventTime: z.string().optional(),
    location: z.string().optional(),
    price: z.string().optional(),
    registerLink: z.string().optional(),
    eventImage: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, events };

