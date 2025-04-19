import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  framework: "@storybook/nextjs",
  docs: {
    autodocs: true,
  },
};

export default config;
