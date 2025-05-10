import template from './cta.twig';
import iconStory from '../../01-atoms/icon/icon.story.js';

export default {
  title: 'Molecules/CTA/Standard CTA',
  args: {
    title: 'OYW Academy',
    content: 'The One Young World Academy, will help young leaders tackle some of the biggest challenges facing our world through a new online learning experience.',
    cta_button: {
      url: 'https://www.oneyoungworld.com/',
      content: 'Read more',
      new_window: true,
    },
    bg_colour: 'u-bg-neutral-grey',
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    title: {
      type: {name: 'string', required: true},
      description: 'The CTA title.',
    },
    content: {
      type: {name: 'string'},
      description: 'The CTA body copy or summary description.',
    },
    icons_url: iconStory.argTypes.icons_url,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Call-to-action (CTA) for a short title, body and link-button.',
      },
    },
  },
};

const Template = args => template(args);

export const Default = Template.bind({});
