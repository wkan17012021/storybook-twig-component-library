import quicklinksTemplate from "./quicklinks.twig";
import headingTemplate from "../../01-atoms/heading/heading.twig";
import linkTemplate from "../../01-atoms/link/link.twig";

export default {
  title: "Molecules/Quicklinks",
  args: {
    title: headingTemplate({
      content: "Quicklinks",
      level: 5,
      classes: ["u-text-lg"],
    }),
    link_one: linkTemplate({
      content: "Favourite Destinations",
      url: "https://unsplash.com/s/photos/travelscholarships/",
      remove_classes: ["u-text-red", "u-break-words"],
    }),
    company_email: linkTemplate({
      content: "information@website.com",
      url: "mailto:information@website.com",
      remove_classes: ["u-text-red"],
      classes: ["u-underline", "u-break-words"],
    }),
  },
  argTypes: {
    title: {
      type: { name: "string", required: true },
      description: "The heading text for the newsletter signup.",
    },
    content: {
      type: { name: "string", required: true },
      description: "The body copy text for the newsletter signup.",
    },
  },
};

const Template = (args) => quicklinksTemplate({ ...args });

export const Default = Template.bind({});
