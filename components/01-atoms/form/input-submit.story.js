import template from './input--submit.twig';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Atoms/Form/Input Submit',
  args: {
    attributes: new DrupalAttribute().setAttribute('value', 'Submit'),
  },
  parameters: {
    docs: {
      description: {
        component: 'Form submit button.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
