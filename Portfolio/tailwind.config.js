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
			keyframes: {
				rotatingXS: {
					"0%, 5%, 95%, 100%": { top: 0 },
					"20%, 25%, 30%": { top: "-15px" },
					"45%, 50%, 55%": { top: "-30px" },
					"70%, 75%, 80%": { top: "-45px" },
				},
				rotatingSM: {
					"0%, 5%, 95%, 100%": { top: 0 },
					"20%, 25%, 30%": { top: "-21px" },
					"45%, 50%, 55%": { top: "-42px" },
					"70%, 75%, 80%": { top: "-63px" },
				},
				rotatingMD: {
					"0%, 5%, 95%, 100%": { top: 0 },
					"20%, 25%, 30%": { top: "-25px" },
					"45%, 50%, 55%": { top: "-50px" },
					"70%, 75%, 80%": { top: "-75px" },
				},
			},
			animation: {
				rotatingXS: "rotatingXS 10s ease-in-out infinite",
				rotatingSM: "rotatingSM 10s ease infinite",
				rotatingMD: "rotatingMD 10s ease infinite",
			},
		},
	},
	plugins: [],
};
