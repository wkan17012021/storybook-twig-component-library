import template from './icon.twig';

export default {
  title: 'Atoms/Icon',
  args: {
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
    alt: 'LinkedIn',
    id: 'linkedin',
  },
  argTypes: {
    icons_url: {
      description: 'Only needs setting for the Storybook context. Value comes from Storybook environment variables.',
      table: {
        defaultValue: {summary: import.meta.env.STORYBOOK_ICONS_URL},
      },
    },
    id: {
      description: 'The ID of the icon in the icons SVG (without the "icon" prefix).',
      control: 'select',
      // @todo is it possible to dynamically generate this list?
      options: [
        'linkedin',
        'x',
        'website',
        'close',
        'search',
        'chevron',
        'download'
      ],
    },
    alt: {
      description: 'The alt text.',
    },
    width: {
      control: 'text',
      description: 'The icon width.',
      table: {
        defaultValue: {summary: '40px'},
        type: {summary: 'string'},
      },
    },
    height: {
      control: 'text',
      description: 'The icon height.',
      table: {
        defaultValue: {summary: '40px'},
        type: {summary: 'string'},
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'An SVG icon.',
      },
    },
  },
};

const Template = args => template({...args});
export const Icon = Template.bind({});
