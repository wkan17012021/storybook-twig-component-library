import template from './input--checkbox.twig';

export default {
  title: 'Atoms/Form/Input Checkbox',
  args: {
    checked: false,
    type: 'checkbox',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Toggles the checked status of the checkbox',
    },
    type: {
      description: 'Defines the type of input field using the type attribute',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'An input checkbox field for a form.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
