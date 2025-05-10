import template from "./cta-with-image.twig";
import imageStory from "../../01-atoms/image/image.story.js";
import ctaImage1 from "./cta-image-1.jpeg";
import ctaImage2 from "./cta-image-2.jpeg";
import { alignmentArgType } from "../../00-base/utils/arg-types-helper.js";
import ctaStory from "./cta.story.js";

export default {
  title: "Molecules/CTA/CTA With Image",
  args: {
    title: "Apply for a scholarship",
    content:
      "Etiam magna lectus, tempor non mollis sit amet, laoreet id urna. Sed vulputate sem id enim ultrices,",
    image: ctaImage1,
    cta_button: {
      url: "https://www.google.com/",
      content: "Apply now",
    },
    alignment: "left",
    text_centre: false,
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
  title: "Attend the Summit",
  content:
    "Etiam magna lectus, tempor non mollis sit amet, laoreet id urna. Sed vulputate sem id enim ultrices,",
  image: ctaImage2,
  cta_button: {
    url: "https://www.google.com/",
    content: "View the speakers",
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
    url: "https://www.google.com/",
    content: "Read more",
    new_window: true,
  },
  alignment: "centre",
};

export const TextCentre = Template.bind({});
TextCentre.args = {
  title: "Sign up to hear from us",
  content:
    "Etiam magna lectus, tempor non mollis sit amet, laoreet id urna. Sed vulputate sem id enim ultrices,",
  image: ctaImage2,
  cta_button: {
    url: "https://www.google.com/",
    content: "Sign up",
    new_window: true,
  },
  alignment: "centre",
  text_centre: true,
};
