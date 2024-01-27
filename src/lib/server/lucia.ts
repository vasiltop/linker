import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { pg } from '@lucia-auth/adapter-postgresql';
import { pool } from './db';

export const auth = lucia({
	env: 'DEV',
	middleware: sveltekit(),
	adapter: pg(pool, {
		user: 'user',
		key: 'user_key',
		session: 'user_session',
	}),
});

export type Auth = typeof auth;
