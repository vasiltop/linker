CREATE TABLE IF NOT EXISTS "language" (
	"id" uuid PRIMARY KEY NOT NULL,
	"language_type" text,
	"name" text,
	"description" text,
	"compiled" boolean
);
