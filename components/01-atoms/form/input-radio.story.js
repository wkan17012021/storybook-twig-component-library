import template from './input--radio.twig';

export default {
  title: 'Atoms/Form/Input Radio Button',
  args: {
    checked: false,
    type: 'radio',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Toggles the selected status of the radio button',
    },
    type: {
      description: 'Defines the type of input field using the type attribute',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'An input radio button field for a form.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
