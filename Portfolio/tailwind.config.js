/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lexend: ["Lexend", "sans-serif"],
			},
			screens: {
				"3xl": "1800px",
			},
		},
	},
	plugins: [],
};
