import template from './social-links.twig'
import iconStory from '../../01-atoms/icon/icon.story.js';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';

export default {
  title: 'Molecules/Social Links',
  args: {
    links: {
      linkedin: 'https://linkedin.com',
      x: 'https://x.com',
      youtube: 'https://youtube.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      tiktok: 'https://tiktok.com',
      website: 'https://website.com',
    },
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    links: {
      description: 'An object with a property for each social link.',
    },
    bg_colour: bgColourArgType(),
    icons_url: iconStory.argTypes.icons_url,
  },
  parameters: {
    docs: {
      description: {
        component: 'Social links.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
