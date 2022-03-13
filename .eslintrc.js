const path = require('path')

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'react-app',
		'plugin:import/typescript'
	],
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
			},
			typescript: {
			},
		},
	},
	rules: {
		'import/no-unused-modules': [
			'warn',
			{
				unusedExports: true,
				missingExports: true,
				src: [path.join(__dirname, 'src')],
			},
		],
	}
}
