import template from './file-link.twig';
import iconStory from '../../01-atoms/icon/icon.story.js';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';

export default {
  title: 'Molecules/File Link',
  args: {
    link: {
      '#title': 'impact-report.pdf',
      '#url': {
        uri: 'base:sites/default/files/2025-03/impact-report.pdf',
      },
    },
    file_size: '1.93 MB',
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    bg_colour: bgColourArgType(),
    icons_url: iconStory.argTypes.icons_url,
  },
  parameters: {
    docs: {
      description: {
        component: 'A download media document component',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
