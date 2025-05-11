import template from "./blockquote.twig";
import fieldRichTextTemplate from "../../01-atoms/fields/field--rich-text.twig";
import paragraphTemplate from "../../01-atoms/text/paragraph.twig";
import {
  newWindowArgType,
  urlArgType,
} from "../../00-base/utils/arg-types-helper.js";

export default {
  title: "Molecules/Blockquote",
  args: {
    content: fieldRichTextTemplate({
      label_hidden: true,
      items: [
        {
          content: paragraphTemplate({
            content:
              "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes..",
          }),
        },
      ],
    }),
    source: "Marcel Proust",
    source_link: "https://www.shutterfly.com/ideas/travel-quotes/",
  },
  argTypes: {
    content: {
      type: { name: "string", required: true },
      description: "The quote or phrase.",
    },
    source: {
      type: { name: "string", required: true },
      description: "The person or entity name.",
    },
    source_link: urlArgType("A URL to turn the source into a link."),
    new_window: newWindowArgType(),
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
