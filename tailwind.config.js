module.exports = {
	darkMode: "class",
	content: ["./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: "#001730",
				primaryLighter: "#4AD7D1",
				secondary: "#FE4A49",
			},
			backgroundImage: {
				"login-bg": 'url("/")',
			},
		},
	},
	plugins: [],
};
