import template from "./press-contact-info.twig";
import headingTemplate from "../../01-atoms/heading/heading.twig";
import linkTemplate from "../../01-atoms/link/link.twig";

export default {
  title: "Molecules/Press Contact Info",
  args: {
    title: headingTemplate({
      content: "Press contact information",
      classes: ["u-text-base", "u-font-medium", "u-mb-0"],
      level: 5,
    }),
    email: linkTemplate({
      content: "NAME@domain.com",
      url: "mailto:NAME@domain.com",
      classes: [
        "u-inline",
        "u-font-light",
        "u-underline",
        "u-decoration-solid",
        "u-decoration-1",
        "u-decoration-orange",
        "u-underline-offset-2",
      ],
      remove_classes: ["u-text-burnt-orange"],
    }),
    telephone: linkTemplate({
      content: "0800 123 4567",
      url: "tel:0800 123 4567",
      remove_classes: ["u-text-burnt-orange"],
      classes: [
        "u-font-light",
        "u-underline",
        "u-decoration-solid",
        "u-decoration-1",
        "u-decoration-orange",
        "u-underline-offset-2",
      ],
    }),
  },
  argTypes: {
    title: {
      type: { name: "string", required: true },
      description: "The text for the heading title.",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A text box to display press contact details for the News single design.",
      },
    },
  },
};

const Template = (args) => template({ ...args });

export const Default = Template.bind({});
