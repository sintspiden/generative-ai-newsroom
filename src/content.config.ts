import { defineCollection, z } from 'astro:content';

const parseDate = (value: string, ctx: z.RefinementCtx) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: `Invalid date: ${value}` });
    return z.NEVER;
  }
  return parsed.toISOString();
};

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    date: z.string().transform(parseDate),
    category: z.string().min(1),
    source: z.string().optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    url: z.string().url().optional(),
    importance: z.coerce.number().optional(),
    entities: z.array(z.string()).default([]),
  }),
});

export const collections = { news };
