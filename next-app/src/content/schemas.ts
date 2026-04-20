import { z } from "zod";

export const productSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  status: z.enum(["live", "coming-soon", "archived"]).default("live"),
  price: z.number(),
  currency: z.string().default("USD"),
  buyLink: z.string().url(),
  heroImage: z.string(),
  installUrlProd: z.string().url().optional(),
  installUrlSandbox: z.string().url().optional(),
  features: z
    .array(z.object({ title: z.string(), description: z.string() }))
    .default([]),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
});

export type ProductFrontmatter = z.infer<typeof productSchema>;

export type Product = ProductFrontmatter & {
  body: string;
};
