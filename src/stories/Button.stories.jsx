import { Button } from "../components/Button";

export default {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
  },
};

export const Playground = (args) => <Button {...args} />;

Playground.args = {
  children: "Click Me",
};

Playground.argTypes = {
  variant: {
    control: "select",
    options: ["primary", "outline"],
  },
};