import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Checkbox from './index';

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
);

export const Unchecked = Template.bind({});

Unchecked.args = {
    disabled: false,
    checked: false,
    id: "checkbox",
    text: "Unchecked",
    name: "checkbox",
};

export const Checked = Template.bind({});

Checked.args = {
    disabled: false,
    checked: true,
    id: "checkbox",
    text: "Checked",
    name: "checkbox",
};

export const Disabled = Template.bind({});

Disabled.args = {
    disabled: true,
    checked: false,
    id: "checkbox",
    text: "Disabled",
    name: "checkbox",
};

export const DisabledChecked = Template.bind({});

DisabledChecked.args = {
    disabled: true,
    checked: true,
    id: "checkbox",
    text: "Disabled and checked",
    name: "checkbox",
};