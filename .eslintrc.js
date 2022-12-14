module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true, // React .JSX-files support
		},
	},
	extends: [
		'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:compat/recommended',
		'plugin:sonarjs/recommended',
	],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@app', './src'],
					['@image', './src/image'],
				],
				extensions: ['.js', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
		polyfills: [
			'Promise',
			'URL',
			'URLSearchParams',
		],
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off', // Allow using const a = require('module') for .js files
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-underscore-dangle': [
					'error', {
						allowAfterThis: true,
					},
				],
				'react/jsx-props-no-multi-spaces': 'off',
			},
		},
	],
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],

		'no-console': 'off', // allow console.log for better debugging
		'arrow-body-style': 'off', // allow block body (denoted by curly braces) for better debugging
		indent: ['error', 'tab'], // Force tabs for idents
		'no-tabs': 'off', // Allow using tabs
		'linebreak-style': 'off', // Both Windows and Linux linebreak support
		'implicit-arrow-linebreak': 'off', // Allow arrow function bodies on both same line and new line
		'max-len': ['error', { code: 150, tabWidth: 4 }],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
		'space-infix-ops': ['error'],
		'class-methods-use-this': 'off',

		'import/prefer-default-export': 'off', // Don't force default export for files containing one export only
		'import/no-default-export': 'error', // Don't use default export as it is not always clear and readable
		'import/order': [
			'error', {
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '*',
						group: 'external',
						position: 'after',
					},
					{
						pattern: '@common/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '@app/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '**.(s?)css',
						group: 'external',
						position: 'after',
					},
					{
						pattern: '**.(s?)css',
						group: 'internal',
						position: 'after',
					},
				],
				'newlines-between': 'always-and-inside-groups',
			},
		],
		'import/extensions': [
			'error',
			'always',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
				jsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],

		'react/state-in-constructor': ['error', 'never'], // Forbid setting state in constructor - specify with prop setter
		'react/jsx-indent': ['error', 'tab', { checkAttributes: true, indentLogicalExpressions: true }], // Ident .jsx nodes with tabs
		'react/jsx-indent-props': ['error', 'tab'], // Ident .jsx node props with tabs
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/destructuring-assignment': 'off',
		'react/jsx-props-no-spreading': 'off', // Allow spread operator
		'react/prop-types': 'off', // Allow components without propTypes
		'react/display-name': 'off', // Allow skipping displayName for React components
		'react/sort-comp': 'off', // Disable abc sorting of methods/props
		'react/require-default-props': 'off', // Allow skipping default props
		'react/no-unescaped-entities': 'off', // allow quotation marks
		'react/jsx-props-no-multi-spaces': 'off', // Allow blank line between component props
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],

		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				labelComponents: [],
				labelAttributes: [],
				controlComponents: [],
				assert: 'either',
				depth: 25,
			},
		], // Allow input to be outside a label
		'jsx-a11y/anchor-has-content': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/tabindex-no-positive': 'off',

		'@typescript-eslint/no-var-requires': 'off', // Allow require imports
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off', // Allow non-null assertions - this is for defaultProps
		'@typescript-eslint/array-type': [
			'error', {
				default: 'generic',
			},
		],

		'no-shadow': 'off', // Adds support for TypeScript's this parameters and global augmentation
		'global-require': 'off',
		camelcase: ['error', { allow: ['UNSAFE'] }], // Allow UNSAFE_ lifecycle method to be dashed
		'no-plusplus': 'off',
		'prefer-destructuring': 'off',
		'lines-between-class-members': [
			'error',
			'always', {
				exceptAfterSingleLine: true,
			},
		],
		'unicode-bom': 'off',
	},
};
