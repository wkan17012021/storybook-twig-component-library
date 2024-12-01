import template from './page-title.twig';
import sectionStory from '../../02-molecules/section/section.story.js';
import heroImage from './hero-image.jpg';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';

export default {
  title: 'Organisms/Page Title',
  args: {
    title: 'Page title without hero image',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cta_button: sectionStory.args.cta_button,
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    ...sectionStory.argTypes,
    bg_colour: bgColourArgType('u-bg-grey-blue'),
    hero_image: {
      type: {name: 'string'},
      description: 'The path to the hero image.',
      table: {
        type: {summary: 'string'},
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});

export const WithHeroImage = Template.bind({});
WithHeroImage.args = {
  title: 'Page title with hero image',
  hero_image: heroImage,
}
