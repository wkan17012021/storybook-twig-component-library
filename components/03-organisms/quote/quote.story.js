import quoteTemplate from "./quote.twig";
import fieldRichTextTemplate from "../../01-atoms/fields/field--rich-text.twig";
import paragraphTemplate from "../../01-atoms/text/paragraph.twig";
import { bgColourArgType } from "../../00-base/utils/arg-types-helper.js";
import blockquoteStory from "../../02-molecules/blockquote/blockquote.story.js";

export default {
  title: "Organisms/Quotes/Standard Quote",
  args: {
    content: fieldRichTextTemplate({
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
    source: "Quote source",
    source_link: "https://unsplash.com/s/photos/travel",
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
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

const QuoteTemplate = (args) => quoteTemplate({ ...args });

export const Default = QuoteTemplate.bind({});
