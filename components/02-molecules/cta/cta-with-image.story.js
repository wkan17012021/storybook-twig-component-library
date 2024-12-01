import template from "./cta-with-image.twig";
import imageStory from "../../01-atoms/image/image.story.js";
import ctaImage1 from "./cta-image-1.jpeg";
import ctaImage2 from "./cta-image-2.jpeg";
import { alignmentArgType } from "../../00-base/utils/arg-types-helper.js";
import ctaStory from "./cta.story.js";

export default {
  title: "Molecules/CTA/CTA With Image",
  args: {
    title: "Careers",
    content:
      "Etiam magna lectus, tempor non mollis sit amet, laoreet id urna. Sed vulputate sem id enim ultrices,",
    image: ctaImage1,
    cta_button: {
      url: "https://unsplash.com/s/photos/travel",
      content: "Current Vacancies",
      type: "primary2",
    },
    alignment: "left",
    bg_colour: "u-bg-mid-blue",
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    ...ctaStory.argTypes,
    image: imageStory.argTypes,
    alignment: alignmentArgType("CTA"),
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Positionable CTA with image.",
      },
    },
  },
};

const Template = (args) => template(args);

export const Default = Template.bind({});

export const Right = Template.bind({});
Right.args = {
  title: "What can we help you with?",
  content:
    "Etiam magna lectus, tempor non mollis sit amet, laoreet id urna. Sed vulputate sem id enim ultrices,",
  image: ctaImage2,
  cta_button: {
    url: "https://unsplash.com/s/photos/travel",
    content: "Search Travel Co.",
    type: "primary2",
  },
  alignment: "right",
  bg_colour: "u-bg-green",
};

export const Centre = Template.bind({});
Centre.args = {
  title: "Apply for a scholarship",
  content:
    "Etiam magna lectus, tempor non mollis sit amet, laoreet id urna. Sed vulputate sem id enim ultrices,",
  image: ctaImage1,
  cta_button: {
    url: "https://unsplash.com/s/photos/travel",
    content: "Read more",
    new_window: true,
    type: "primary2",
  },
};
