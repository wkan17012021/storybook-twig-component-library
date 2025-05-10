import ul from "../../01-atoms/lists/ul.twig";
import menuItem from "./desktop-menu-item.twig";
// import '../../../../../../modules/contrib/tb_megamenu/dist/base.css'; import from tb contrib module
import DrupalAttribute from "drupal-attribute";

export default {
  title: "Molecules/Menus/Desktop Menu/Menu Item",
  args: {
    level: 1,
    section: "frontend",
    attributes: new DrupalAttribute()
      .setAttribute("aria-level", "1")
      .addClass(["tbm-item", "level-1"]),
    link: {
      attributes: new DrupalAttribute()
        .setAttribute("tabindex", "0")
        .setAttribute("aria-expanded", "false")
        .addClass(["tbm-link", "level-1", "no-link", "u-cursor-pointer"]),
      title_translate: "Example menu item",
    },
  },
  argTypes: {},
};

const Template = (args) =>
  ul({
    lis: [menuItem({ ...args })],
  });

export const Level1NoLink = Template.bind({});

export const Level1WithLink = Template.bind({});
Level1WithLink.args = {
  level: 1,
  section: "frontend",
  attributes: new DrupalAttribute()
    .setAttribute("aria-level", "1")
    .addClass(["tbm-item", "level-1"]),
  link: {
    attributes: new DrupalAttribute()
      .setAttribute("tabindex", "0")
      .setAttribute("aria-expanded", "false")
      .addClass(["tbm-link", "level-1"]),
    title_translate: "Example menu item",
    url: "https://google.com/",
  },
};

export const Level2WithLink = Template.bind({});
Level2WithLink.args = {
  level: 2,
  section: "frontend",
  attributes: new DrupalAttribute()
    .setAttribute("aria-level", "2")
    .addClass(["tbm-item", "level-2"]),
  link: {
    attributes: new DrupalAttribute()
      .setAttribute("tabindex", "0")
      .setAttribute("aria-expanded", "false")
      .addClass(["tbm-link", "level-2"]),
    title_translate: "Example submenu item",
    url: "https://google.com/",
  },
};
