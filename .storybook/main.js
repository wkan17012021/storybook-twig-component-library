/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../components/**/*.story.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    // Show a Docs page for each component.
    autodocs: true,
  },
  features: {},
  core: {
    // Disable usage stats.
    disableTelemetry: true,
    // Disable what's new.
    disableWhatsNewNotifications: true,
  },
  env: (config) => ({
    ...config,
    STORYBOOK_ICONS_URL: '../../../assets/icons/icons.svg',
  }),
};
export default config;
