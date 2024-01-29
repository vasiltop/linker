import {
	pgTable,
	bigint,
	varchar,
	uuid,
	text,
	boolean,
} from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: varchar('id', {
		length: 15,
	}).primaryKey(),
	username: varchar('username', {
		length: 255,
	})
		.notNull()
		.unique(),
});

export const session = pgTable('user_session', {
	id: varchar('id', {
		length: 128,
	}).primaryKey(),
	userId: varchar('user_id', {
		length: 15,
	})
		.notNull()
		.references(() => user.id),
	activeExpires: bigint('active_expires', {
		mode: 'number',
	}).notNull(),
	idleExpires: bigint('idle_expires', {
		mode: 'number',
	}).notNull(),
});

export const key = pgTable('user_key', {
	id: varchar('id', {
		length: 255,
	}).primaryKey(),
	userId: varchar('user_id', {
		length: 15,
	})
		.notNull()
		.references(() => user.id),
	hashedPassword: varchar('hashed_password', {
		length: 255,
	}),
});

export const language = pgTable('language', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	userId: varchar('user_id', {
		length: 15,
	})
		.notNull()
		.references(() => user.id),
});
