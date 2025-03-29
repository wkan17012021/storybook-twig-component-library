import template from './button.twig';
import linkStory from '../link/link.story.js';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';
import iconStory from '../icon/icon.story.js';

const args = {
  title: 'Atoms/Button',
  args: {
    content: 'Example button content',
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    content: linkStory.argTypes.content,
    bg_colour: bgColourArgType('u-bg-ochre'),
    icon_id: iconStory.argTypes.id,
    attributes: {
      type: 'array',
      table: {
        type: {summary: 'object'},
      },
      description: 'Attributes to add to the button.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'An HTML button.',
      },
    },
  },
};

args.argTypes.content.type.required = false;
export default args;

const Template = args => template({...args});

export const Default = Template.bind({});

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  content: 'Example button content',
  icon_id: 'search',
  icons_url: import.meta.env.STORYBOOK_ICONS_URL,
};

export const TransparentButtonWithIcon = Template.bind({});
TransparentButtonWithIcon.args = {
  content: '',
  icon_id: 'search',
  bg_colour: '',
};
