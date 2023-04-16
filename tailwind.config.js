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
		},
	},
	plugins: [],
};
