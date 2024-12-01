import template from "./quote-with-image.twig";
import image from "./monk.jpg";
import imageTemplate from "../../01-atoms/image/image.twig";
import fieldRichTextTemplate from "../../01-atoms/fields/field--rich-text.twig";
import paragraphTemplate from "../../01-atoms/text/paragraph.twig";
import {
  imagePositionArgType,
  bgColourArgType,
  imageArgType,
} from "../../00-base/utils/arg-types-helper.js";
import blockquoteStory from "../../02-molecules/blockquote/blockquote.story.js";

export default {
  title: "Organisms/Quotes/Quote With Image",
  args: {
    quote: fieldRichTextTemplate({
      label_hidden: true,
      items: [
        {
          content: paragraphTemplate({
            content:
              "A journey of a thousand miles begins with a single step",
          }),
        },
      ],
    }),
    source: "Lao Tzu",
    source_link: "https://unsplash.com/s/photos/travel",
    image: imageTemplate({
      src: image,
      alt: "selective focus photography of monk at corridor",
      title: "selective focus photography of monk at corridor",
    }),
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    image_position: imagePositionArgType(),
    image: imageArgType(),
    content: blockquoteStory.argTypes.content,
    source: blockquoteStory.argTypes.source,
    source_link: blockquoteStory.argTypes.source_link,
    new_window: blockquoteStory.argTypes.new_window,
    bg_colour: bgColourArgType(),
  },
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});

export const ImageLeft = Template.bind({});
ImageLeft.args = {
  image_position: "left",
};
