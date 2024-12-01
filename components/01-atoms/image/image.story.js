import template from './image.twig';
import {responsiveArgType} from '../../00-base/utils/arg-types-helper.js';

export default {
  title: 'Atoms/Image',
  args: {
    src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image alt text',
    title: 'Image title',
  },
  argTypes: {
    src: {
      type: {name: 'string', required: true},
      description: 'The path or URL to the image.',
      table: {
        type: {summary: 'string'},
      },
    },
    alt: {
      type: {name: 'string', required: true},
      description: 'The image alt attribute value.',
      table: {
        type: {summary: 'string'},
      },
    },
    title: {
      type: {name: 'string'},
      description: 'The image title attribute value.',
      table: {
        type: {summary: 'string'},
      },
    },
    responsive: responsiveArgType(),
  },
  parameters: {
    docs: {
      description: {
        component: 'An image.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
