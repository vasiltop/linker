ALTER TABLE "language" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "language" DROP COLUMN IF EXISTS "language_type";--> statement-breakpoint
ALTER TABLE "language" DROP COLUMN IF EXISTS "compiled";