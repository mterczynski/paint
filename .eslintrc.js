module.exports = {
  env: {
    "browser": true,
    "es2021": true,
		"jest": true,
  },
  extends: [
    "eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
  ],
	settings: {
		react: {
			version: 'latest'
		}
	},
  rules: {
		"no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
		"@typescript-eslint/no-var-requires": "off"
  }
}
