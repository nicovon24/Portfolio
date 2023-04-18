/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#050816" /* text-primary */,
				"main-green": "#64ffda",
				"main-blue": "#0e1a2e",
				"main-pink": "#ff69b4 ",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
			},
			fontFamily: {
				secondary: ["SF Mono", "sans-serif"],
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.png')",
				"main-bg": "url('./src/assets/bg_nuevo.svg')",
			},
			keyframes: {
				"open-menu": {
					"0%": { transform: "scaleY(0)" },
					"80%": { transform: "scaleY(1.2)" },
					"100%": { transform: "scaleY(2)" },
				},
				type: {
					"0%": { transform: "translateX(0ch)" },
					"5%, 10%": { transform: "translateX(1ch)" },
					"15%, 20%": { transform: "translateX(2ch)" },
					"25%, 30%": { transform: "translateX(3ch)" },
					"35%, 40%": { transform: "translateX(4ch)" },
					"45%, 50%": { transform: "translateX(5ch)" },
					"55%, 60%": { transform: "translateX(6ch)" },
					"65%, 70%": { transform: "translateX(7ch)" },
					"75%, 80%": { transform: "translateX(8ch)" },
					"85%, 90%": { transform: "translateX(9ch)" },
					"95%, 100%": { transform: "translateX(11ch)" },
				},
			},
			animation: {
				"open-menu": "open-menu 0.5s ease-in-out forwards",
			},
			animation: {
				type: "type 2.7s ease-out .8s infinite alternate both",
			},
		},
	},
	plugins: [
		require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
	],
	variants: {
		cursor: ["responsive", "hover", "focus"],
	},
};
