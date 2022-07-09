const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chakra-ui/storybook-addon",
  ],
  framework: "@storybook/react",
  refs: {
    "@chakra-ui/react": { disable: true },
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@abobo/core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/abobo-core/"
            ),
          },
        ],
      },
    };
  },
};
