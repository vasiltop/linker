ALTER TABLE "language" ADD COLUMN "user_id" varchar(15) NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "language" ADD CONSTRAINT "language_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
