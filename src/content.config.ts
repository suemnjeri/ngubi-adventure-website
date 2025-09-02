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






// // src/content/config.ts
// import { defineCollection, z } from "astro:content";
// import { glob } from "astro/loaders";
// import { SITE } from "@/config";

// export const BLOG_PATH = "src/data/blog";
// export const EVENTS_PATH = "src/data/events"; // Define the path for events


// const blog = defineCollection({
//   loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
//   schema: ({ image }) =>
//     z.object({
//       author: z.string().default(SITE.author),
//       pubDatetime: z.date(),
//       modDatetime: z.date().optional().nullable(),
//       title: z.string(),
//       featured: z.boolean().optional(),
//       draft: z.boolean().optional(),
//       tags: z.array(z.string()).default(["others"]),
//       ogImage: image().or(z.string()).optional(),
//       description: z.string(),
//       canonicalURL: z.string().optional(),
//       hideEditPost: z.boolean().optional(),
//       timezone: z.string().optional(),
//     }),
// });

// // Define the 'events' collection
// const events = defineCollection({
//   type: 'content', // Ensure this is present
//   loader: glob({ pattern: 'src/data/events/**/*.md', base: './' }), // NEW: Explicit base as project root, pattern from there
//   // loader: glob({ pattern: "**/[^_]*.md", base: `./${EVENTS_PATH}` }), // FIX: Revert to using base path
//   schema: ({ image }) => z.object({
//     title: z.string(),
//     description: z.string().optional(),
//     eventDate: z.date(),
//     eventTime: z.string().optional(),
//     location: z.string().optional(),
//     price: z.string().optional(),
//     registerLink: z.string().optional(),
//     eventImage: z.string().optional(),
//     featured: z.boolean().optional(),
//     draft: z.boolean().optional(),
//   }),
// });

// // Export all collections you define here
// export const collections = { blog, events };



// // src/content/config.ts
// import { defineCollection, z } from "astro:content";
// import { glob } from "astro/loaders";
// import { SITE } from "@/config";

// export const BLOG_PATH = "src/data/blog";
// export const EVENTS_PATH = "src/data/events"; // Define the path for events


// const blog = defineCollection({
//   loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
//   schema: ({ image }) =>
//     z.object({
//       author: z.string().default(SITE.author),
//       pubDatetime: z.date(),
//       modDatetime: z.date().optional().nullable(),
//       title: z.string(),
//       featured: z.boolean().optional(),
//       draft: z.boolean().optional(),
//       tags: z.array(z.string()).default(["others"]),
//       ogImage: image().or(z.string()).optional(),
//       description: z.string(),
//       canonicalURL: z.string().optional(),
//       hideEditPost: z.boolean().optional(),
//       timezone: z.string().optional(),
//     }),
// });

// // Define the 'events' collection
// const events = defineCollection({
//   loader: glob({ pattern: "**/[^_]*.md", base: `./${EVENTS_PATH}` }), // Load .md files from src/data/events
//   schema: ({ image }) => z.object({
//     title: z.string(),
//     description: z.string().optional(), // Short description for event card/listing
//     eventDate: z.date(), // The main date of the event
//     eventTime: z.string().optional(), // e.g., "9:00 AM - 1:00 PM"
//     location: z.string().optional(), // e.g., "Ngubi Forest Main Camp" or "Online"
//     price: z.string().optional(), // e.g., "KES 1,500 pp" or "Free"
//     registerLink: z.string().optional(), // URL for registration, could be external or internal booking page
//     eventImage: z.string().optional(), // Image for the event flyer/banner
//         // .refine(img => img.width >= 800, { message: "Event image should be at least 800px wide" })
//         // .optional(),
//     featured: z.boolean().optional(), // To highlight special events on homepage (e.g., featured in hero)
//     draft: z.boolean().optional(),
//   }),
// });

// // Export all collections you define here
// export const collections = { blog, events };