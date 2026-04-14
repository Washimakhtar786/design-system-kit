import { Typography } from "../components/Typography";

export default {
  title: "Design System/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "body"],
    },
    children: { control: "text" },
  },
};

export const Playground = (args) => <Typography {...args} />;

Playground.args = {
  variant: "body",
  children: "Sample text",
};