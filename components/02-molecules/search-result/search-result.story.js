import template from "./search-result.twig";

export default {
  title: "Molecules/Search Result",
  args: {
    title: "Page Title",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    url: "https://www.google.com/",
  },
  argTypes: {
    title: {
      type: { name: "string", required: true },
      description: "The search result title.",
      table: {
        type: { summary: "string" },
      },
    },
    content: {
      type: { name: "string", required: true },
      description: "The search result content.",
      table: {
        type: { summary: "string" },
      },
    },
    url: {
      type: { name: "string", required: true },
      description: "The link to the node.",
      table: {
        type: { summary: "string" },
      },
    },
  },
  parameters: {
    // Ensures the molecule is centered in the Storybook view.
    layout: "centered",
    docs: {
      description: {
        component: "A search result.",
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
