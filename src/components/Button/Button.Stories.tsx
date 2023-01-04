import * as React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonProps } from '@app/components/Button/Button';

const Story: ComponentMeta<typeof Button> = {
	title: 'Button',
	component: Button,
	argTypes: {
		className: {
			control: false,
		},
		children: {
			defaultValue: undefined,
			description: 'React.ReactNode',
			control: { type: 'text' },
		},
		disabled: {
			options: [true, false, undefined],
			control: { type: 'radio' },
		},
		tabIndex: {
			control: false,
		},
		onClick: {
			control: false,
		},
	},
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const OutlinedButton: ComponentStory<typeof Button> = Template.bind({});
OutlinedButton.args = {
	className: 'btn',
	children: 'Outlined Button',
	disabled: false,
	tabIndex: 0,
};

/* This is required by Storybook */
// eslint-disable-next-line import/no-default-export
export default Story;
