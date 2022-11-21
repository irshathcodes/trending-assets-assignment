const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"text-xs": "12px",
			},
			colors: {
				primary: "#14172B",
			},
			fontFamily: {
				tomorrow: ["Tomorrow", ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				"card-shape": "url('/src/assets/card-bg.svg')",
			},
		},
	},
	plugins: [],
};
