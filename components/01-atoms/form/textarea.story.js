import template from './textarea.twig';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Atoms/Form/Textarea',
  args: {
    value: '',
  },
  parameters: {
    docs: {
      description: {
        component: 'A multi-line text input control for a form.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});

export const InError = Template.bind({});
InError.args = {
  attributes: new DrupalAttribute().addClass('error')
}
