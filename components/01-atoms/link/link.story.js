import template from './link.twig';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Atoms/Link',
  args: {
    content: 'Example link content',
    url: 'http://www.oneyoungworld.com',
    attributes: new DrupalAttribute().setAttribute('target', '_blank'),
  },
  argTypes: {
    content: {
      type: {name: 'string', required: true},
      description: 'The content for the link.',
      table: {
        type: {summary: 'string'},
      },
    },
    url: {
      type: {name: 'string', required: true},
      description: 'The value for the href attribute.',
      table: {
        type: {summary: 'string'},
      },
    },
    attributes: {
      type: 'array',
      table: {
        type: {summary: 'object'},
      },
      description: 'Attributes to add to the link.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A link anchor.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
