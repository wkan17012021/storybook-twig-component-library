import cardTemplate from "./card.twig";
import imageSource from "./Ao Nang Beach Golden Sunset In Krabi Thailand.jpg";
import { formatDate } from "../../00-base/utils/date-helper.js";
import imageStory from "../../01-atoms/image/image.story.js";
import headingStory from "../../01-atoms/heading/heading.story.js";
import dateStory from "../../01-atoms/date/date.story.js";
import { bgColourArgType } from "../../00-base/utils/arg-types-helper.js";

let args = {
  title: "Molecules/Card",
  args: {
    image: {
      src: imageSource,
      alt: "Ao Nang Beach Golden Sunset In Krabi Thailand",
      title: "Ao Nang Beach Golden Sunset In Krabi Thailand",
    },
    title: "Title",
    url: "https://unsplash.com/s/photos/travel",
    date: new Date().toISOString(),
    datetime: new Date().toISOString(),
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  argTypes: {
    type: {
      description: "The card type.",
      control: "select",
      options: ["default", "featured", "event", "news", "speaker"],
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "string" },
      },
    },
    body: {
      type: { name: "string", required: true },
      description: "The card body.",
    },
    featured: {
      description: "Toggle featured tag styling.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "string" },
      },
      control: "boolean",
    },
    tags: {
      control: "object",
      description:
        "An object comprising: the label (`label`), the URL (`url`) and to open in a new window (`new_window: true`).",
      table: {
        type: { summary: "object" },
      },
    },
    bg_colour: bgColourArgType("u-bg-eggshell"),
    image: imageStory.argTypes,
    title: headingStory.argTypes.content,
    title_heading_level: headingStory.argTypes.level,
    date: dateStory.argTypes.date,
    datetime: dateStory.argTypes.datetime,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Similar card variants.",
      },
    },
  },
};

// Reconfigure imported arguments.
args.argTypes.title_heading_level.type.required = false;
args.argTypes.title_heading_level.table.defaultValue.summary = 4;

export default args;

const Template = ({ date, ...args }) => {
  const { datetime, formattedDate } = formatDate(date);

  return cardTemplate({
    ...args,
    date_time: datetime,
    date: formattedDate,
  });
};

export const Default = Template.bind({});
Default.args = {
  type: "default",
};

export const FeaturedCard = Template.bind({});
FeaturedCard.args = {
  type: "featured",
};

export const EventCard = Template.bind({});
EventCard.args = {
  type: "event",
  tags: [
    {
      label: "Event",
      url: "https://unsplash.com/s/photos/travel",
      new_window: true,
    },
  ],
};

export const NewsCard = Template.bind({});
NewsCard.args = {
  type: "news",
};

export const BlogCard = Template.bind({});
BlogCard.args = {
  type: "speaker",
};
