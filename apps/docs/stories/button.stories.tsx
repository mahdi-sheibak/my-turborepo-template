import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={() => {
        alert("Hello from Turborepo!");
      }}
      className="bg-amber-700 w-[800px]"
    >
      Hello
    </Button>
  ),
  name: "Button",
  args: {
    children: "Hello",
  },
};
