import template from "./link-button.twig";
import linkStory from "../link/link.story.js";
import iconStory from "../icon/icon.story.js";
import {
  bgColourArgType,
  newWindowArgType,
} from "../../00-base/utils/arg-types-helper.js";

const args = {
  title: "Atoms/Link Button",
  args: {
    url: "https://www.google.com/",
    content: "Learn more",
    new_window: true,
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    content: linkStory.argTypes.content,
    url: linkStory.argTypes.url,
    new_window: newWindowArgType(),
    type: {
      description: "The style of button.",
      control: "select",
      options: [
        "icon-only",
        "pager-number",
        "primary",
        "primary2",
        "secondary",
      ],
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: "string" },
      },
    },
    bg_colour: bgColourArgType("u-bg-orange", { arg: "type", eq: "icon-only" }),
    icon_id: iconStory.argTypes.id,
  },
  parameters: {
    docs: {
      description: {
        component:
          "The default button is a styled anchor tag with an SVG arrow.",
      },
    },
  },
};

args.argTypes.icon_id.table = {
  defaultValue: { summary: "chevron" },
  type: { summary: "string" },
};

args.argTypes.content.type.required = false;

export default args;

const Template = (args) => template({ ...args });

export const Default = Template.bind({});

export const Primary2 = Template.bind({});
Primary2.args = {
  type: "primary2",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  type: "icon-only",
};

export const PagerNumber = Template.bind({});
PagerNumber.args = {
  type: "pager-number",
  content: "2",
};
