import template from "./heading.twig";
import { newWindowArgType } from "../../00-base/utils/arg-types-helper.js";

export default {
  title: "Atoms/Heading",
  args: {
    level: 1,
    content: "Example heading content",
  },
  argTypes: {
    level: {
      type: { name: "string", required: true },
      description: "The heading level (1-6) to use.",
      table: {
        defaultValue: { summary: 1 },
        type: { summary: "string" },
      },
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    content: {
      type: { name: "string", required: true },
      description: "The heading content.",
      table: {
        type: { summary: "string" },
      },
    },
    url: {
      type: { name: "string" },
      description: "The href value for an optional anchor on the heading.",
      table: {
        type: { summary: "string" },
      },
    },
    new_window: newWindowArgType(),
  },
  parameters: {
    docs: {
      description: {
        component:
          "Each heading level tag (1-6) is styled natively plus a CSS class exists for each level which applies the same style (`.h1`, `.h2`, `.h3`, `.h4`, `.h5`, `.h6`).",
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const H1 = Template.bind({});
H1.args = {
  level: 1,
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
};

export const H6 = Template.bind({});
H6.args = {
  level: 6,
};

export const H3WithLink = Template.bind({});
H3WithLink.args = {
  level: 3,
  url: "http://www.google.com",
  new_window: true,
};
