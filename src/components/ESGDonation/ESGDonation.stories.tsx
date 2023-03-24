import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ESGDonation from "./ESGDonation";

export default {
  title: "ReactComponentLibrary/ESGDonation",
  component: ESGDonation,
} as Meta<typeof ESGDonation>;

const Template: StoryFn<typeof ESGDonation> = () => <ESGDonation />;

export const HelloWorld = Template.bind({});
