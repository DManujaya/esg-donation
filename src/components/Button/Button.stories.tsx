import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});

ClickMe.args = {
  label: "Click me!",
};
