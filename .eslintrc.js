// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "jsx-a11y"],
	settings: {
		react: {
			version: "latest",
		},
	},
	rules: {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["warn"],
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/alt-text": "error",
		"react/display-name": "off" // disabled because of a problem similar to this one: https://github.com/jsx-eslint/eslint-plugin-react/issues/2269
	},
};
