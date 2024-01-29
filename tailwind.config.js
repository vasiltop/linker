import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				dark: {
					...themes.dark,
					primary: '#141517',
					secondary: '#405263',
					accent: '#3e4c59',
					neutral: '#838776',
					'base-100': '#1a1d1f',
					'neutral-content': '#ffffff',
				},
			},
		],
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
