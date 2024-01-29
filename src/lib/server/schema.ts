import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { language } from './db/schema';

export const Language = createSelectSchema(language);

export type Language = z.infer<typeof Language>;
