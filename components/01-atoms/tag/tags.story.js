import template from "./tag.twig";
import linkStory from "../link/link.story.js";
import {
  borderColourArgType,
  newWindowArgType,
} from "../../00-base/utils/arg-types-helper.js";

let args = {
  title: "Atoms/Tag",
  args: {
    text: "SDC Tag 1",
  },
  argTypes: {
    text: {
      type: { name: "string", required: true },
      description: "The text for the tag.",
      table: {
        type: { summary: "string" },
      },
    },
    border_colour: borderColourArgType("", { arg: "featured", truthy: false }),
    featured: {
      description: "Toggle featured tag styling.",
      table: {
        defaultValue: { summary: false },
        type: { summary: "string" },
      },
      control: "boolean",
    },
    url: linkStory.argTypes.url,
    new_window: newWindowArgType(),
  },
};

// Reconfigure imported arguments.
args.argTypes.url.type.required = false;

export default args;

const Template = (args) => template({ ...args });

export const Default = Template.bind({});

export const TagWithLink = Template.bind({});
TagWithLink.args = {
  url: "http://www.google.com",
};

export const ColouredTag = Template.bind({});
ColouredTag.args = {
  text: "Event",
  border_colour: "u-border-magenta",
};

export const FeaturedTag = Template.bind({});
FeaturedTag.args = {
  text: "Featured",
  featured: true,
};
FeaturedTag.argTypes = {
  border_colour: {
    table: {
      disable: true,
    },
  },
};
