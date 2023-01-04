const webpack = require('../config/webpack.config')('development');

module.exports = {
	stories: [
		'../src/**/*.Stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
	webpackFinal: (config) => {
		// Add project Aliases
		config.resolve.alias = { ...config.resolve.alias, ... webpack.resolve.alias };
		// Add project .scss loaders (should use exact loaders instead of ids - they might change if we tweak config)

		config.module.rules.unshift(webpack.module.rules[1].oneOf[2]); // .svg
		config.module.rules.push(webpack.module.rules[1].oneOf[7]); // .scss
		config.module.rules.push(webpack.module.rules[1].oneOf[8]); // .scss

		config.module.rules = [{
			oneOf: config.module.rules,
		}];

		return config;
	},
};
