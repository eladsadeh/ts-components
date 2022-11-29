import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Radiobutton from './Radiobutton';

export default {
    title: 'Atoms/Radiobutton',
    component: Radiobutton,
    argTypes: {},
} as ComponentMeta<typeof Radiobutton>;

const Template: ComponentStory<typeof Radiobutton> = (args) => (
    <Radiobutton {...args} />
);

export const Unchecked = Template.bind({});

Unchecked.args = {
    disabled: false,
    checked: false,
    id: "radio",
    text: "Unchecked",
    value: "Unchecked",
    name: "radio",
};

export const Checked = Template.bind({});

Checked.args = {
    disabled: false,
    checked: true,
    id: "radio",
    text: "Checked",
    value: "Checked",
    name: "radio",
};

export const Disabled = Template.bind({});

Disabled.args = {
    disabled: true,
    checked: false,
    id: "radio",
    text: "Disabled",
    value: "Disabled",
    name: "radio",
};

export const DisabledChecked = Template.bind({});

DisabledChecked.args = {
    disabled: true,
    checked: true,
    id: "radio",
    text: "Disabled and checked",
    value: "Disabled and checked",
    name: "radio",
};