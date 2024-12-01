import template from './section.twig';
import profileCardTemplate from '../profile-card/profile-card.twig';
import profileImage1 from '../../02-molecules/profile-card/rock-climber.jpeg';
import profileImage2 from '../../02-molecules/profile-card/profile-image.jpeg';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';
import profileCardStory from '../profile-card/profile-card.story.js';

const profileCard1Args = {...profileCardStory.args};
profileCard1Args.image = profileImage1;
const profileCard2Args = {...profileCardStory.args};
profileCard2Args.image = profileImage2;

export default {
  title: 'Molecules/Section',
  args: {
    title: 'Example section',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    content: [
      profileCardTemplate(profileCard1Args) +
      profileCardTemplate(profileCard2Args) +
      profileCardTemplate(profileCard1Args),
    ],
    use_columns: true,
    has_overlay: true,
    cta_button: {
      url: '#',
      content: 'Button',
    },
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    title: {
      type: {name: 'string'},
      description: 'The section title.',
      table: {
        type: {summary: 'string'},
      },
    },
    body: {
      type: {name: 'string'},
      description: 'The section body text.',
      table: {
        type: {summary: 'string'},
      },
    },
    content: {
      type: 'array',
      table: {
        type: {summary: 'object', required: true},
      },
      description: 'The section content.',
    },
    has_overlay: {
      description: 'Set to true if the content has an overlay e.g. People profiles.',
      table: {
        defaultValue: {summary: 'false'},
        type: {summary: 'string'},
      },
      control: 'boolean',
    },
    cta_button: {
      description: 'To display a CTA button at the bottom of the section specify a button object with `url`, `content`, and `new_window`.',
    },
    bg_colour: bgColourArgType('u-bg-white'),
    use_columns: {
      description: 'Toggle a columns layout for the content.',
      table: {
        defaultValue: {summary: 'false'},
        type: {summary: 'string'},
      },
      control: 'boolean',
    },
    tag: {
      type: {name: 'string'},
      description: 'The HTML tag to use instead of `section`.',
      table: {
        defaultValue: {summary: 'section'},
        type: {summary: 'string'},
      },
    },
    indent_bg: {
      description: 'Set to true to have the background indented.',
      table: {
        defaultValue: {summary: 'false'},
        type: {summary: 'string'},
      },
      control: 'boolean',
    },
    indent_bg_side: {
      description: 'The side of the indented background.',
      control: 'select',
      options: [
        '',
        'right',
        'left',
      ],
      table: {
        defaultValue: {summary: 'right'},
        type: {summary: 'string'},
      },
      if: {arg: 'indent_bg', truthy: true},
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A section is a generic molecule that provides the foundations for the majority of organisms. By default, it is a `<section>` HTML element with `<header>` and `<footer>`.',
      },
    },
  },
};

const Template = args => template({...args});

export const Section = Template.bind({});

export const SectionWithDefaultIndentedBackground = Template.bind({});
SectionWithDefaultIndentedBackground.args = {
  indent_bg: true,
  bg_colour: 'u-bg-ochre',
};

export const SectionWithLeftIndentedBackground = Template.bind({});
SectionWithLeftIndentedBackground.args = {
  indent_bg: true,
  indent_bg_side: 'left',
  bg_colour: 'u-bg-ochre',
};
