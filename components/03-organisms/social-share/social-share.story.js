import template from "./social-share.twig";
import iconStory from "../../01-atoms/icon/icon.story.js";
import { bgColourArgType } from "../../00-base/utils/arg-types-helper.js";

export default {
  title: "Organisms/Social Share",
  args: {
    links: {
      facebook:
        "https://unsplash.com/s/photos/travel",
      x: "https://unsplash.com/s/photos/travel",
      linkedin:
        "https://unsplash.com/s/photos/travel",
      copy: "https://unsplash.com/s/photos/travel",
      email:
        "mailto:?subject=Travel%20Co&body=travelco@hotmail.com",
    },
    alt_texts: {
      facebook: "Share to Facebook",
      x: "Share to X",
      linkedin: "Share to LinkedIn",
      copy: "Copy to clipboard",
      email: "Share via Email",
    },
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    links: {
      description: "An object with a property for each social sharing link.",
    },
    bg_colour: bgColourArgType(),
    icons_url: iconStory.argTypes.icons_url,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Social sharing links. Please note the copy to clipboard icon does not work in storybook as it requires Drupal JS.",
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
