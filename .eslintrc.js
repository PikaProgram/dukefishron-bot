module.exports = {
	env: {
		es2020: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		indent: ['error', 4],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
