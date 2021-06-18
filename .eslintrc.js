/*
 * @author: lzj
 * @Date: 2021-03-16 15:27:41
 * @LastEditTime: 2021-03-16 15:27:41
 */
/*
 * @author: lzj
 * @Date: 2020-10-21 16:59:39
 * @LastEditTime: 2021-03-16 12:07:14
 */
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'@typescript-eslint/no-explicit-any': [
			'off'
		]
	}
}
