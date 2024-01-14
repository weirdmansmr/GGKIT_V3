module.exports = {
	darkMode: "class",
	content: ["./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: "#001730",
				primaryTr: "#001730CC",
				primaryLighter: "#4AD7D1",
				primaryLightTr: "#4AD7D166",
				secondary: "#FE4A49",
			},
			backgroundImage: {
				"login-bg": 'url("/")',
			},
		},
	},
	plugins: [],
};
