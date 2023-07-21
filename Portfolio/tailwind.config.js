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
			colors: {
				mainBg: "#faf3dd",
				CTA: "#bc6c25",
				primaryAccent: "#4a7c59",
				secondaryAccent: "#465e51",
				tertiaryAccent: "#dda15e",
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
				handWave: {
					"0%, 60%, 100%": { transform: "rotate(0deg)" },
					"10%, 30%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10deg)" },
				},
			},
			animation: {
				rotatingXS: "rotatingXS 10s ease-in-out infinite",
				rotatingSM: "rotatingSM 10s ease infinite",
				rotatingMD: "rotatingMD 10s ease infinite",
				handWave: "handWave 2.5s ease infinite",
			},
		},
	},
	plugins: [],
};
