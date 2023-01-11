/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		colors: ({ colors }) => ({
			...colors,
			primary: '#FF8066'
		}),
		extend: {}
	},
	plugins: []
};
