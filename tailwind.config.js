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
				"secondary-blue": "#112240",
				"main-pink": "#ff69b4 ",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
				input: "#090325",
				contact: "#112240",
			},
			cursor: {
				pointer: "pointer",
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
				"home-bg": "url(./src/assets/bg_home.png)",
			},
			keyframes: {
				"open-menu": {
					"0%": { transform: "scaleY(0)" },
					"50%": { transform: "scaleY(0.5)" },
					"100%": { transform: "scaleY(1)" },
				},
				type: {
					"0%": { transform: "translateX(0ch)" },
					"5%, 10%": { transform: "translateX(0.7ch)" },
					"15%, 20%": { transform: "translateX(1.4ch)" },
					"25%, 30%": { transform: "translateX(2.1ch)" },
					"35%, 40%": { transform: "translateX(2.8ch)" },
					"45%, 50%": { transform: "translateX(3.5ch)" },
					"55%, 60%": { transform: "translateX(4.2ch)" },
					"65%, 70%": { transform: "translateX(4.9ch)" },
					"75%, 80%": { transform: "translateX(5.6ch)" },
					"85%, 90%": { transform: "translateX(6.3ch)" },
					"95%, 100%": { transform: "translateX(7.4ch)" },
				},
			},
			animation: {
				"open-menu": "open-menu 0.5s ease-in-out forwards",
				type: "type 2.7s ease-out .8s infinite alternate both",
			},
			screens: {
				"3xl": { min: "1650px", max: "3000px" },
			},
		},
	},
	plugins: [
		require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
		require("daisyui"),
	],
};
