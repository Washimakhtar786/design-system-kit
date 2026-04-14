import { Input } from "../components/input";

export default {
  title: "Design System/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    error: { control: "boolean" },
  },
};

export const Playground = (args) => <Input {...args} />;

Playground.args = {
  placeholder: "Enter your name...",
  error: false,
};