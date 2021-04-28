import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, ButtonTypes } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export default {
  title: 'Fruit/Button',
  component: Button,
  argTypes: {
    // onClick: { action: "click" },
    type: {
      control: {
        type: 'radio',
        options: ButtonTypes,
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['large', 'middle', 'small'],
      },
    },
  },
} as Meta;
const props: ButtonProps = {
  size: 'large',
  type: 'default',
};
export const Primary = Template.bind({});
Primary.args = {
  ...props,
  type: 'default',
  children: 'primary',
  onClick: () => {
    console.log(111);
  },
} as ButtonProps;
Primary.storyName = '测试111';

export const Text = Template.bind({});
Text.args = {
  ...props,
  type: 'text',
  size: 'small',
  children: '1',
} as ButtonProps;
