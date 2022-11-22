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
				card: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)",
			},
		},
	},
	plugins: [],
};
