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
					primary: '#191c1f',
					secondary: '#405263',
					accent: '#3e4c59',
					neutral: '#bdc4a7',
					'base-100': '#1f2429',
					'neutral-content': '#ffffff',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
