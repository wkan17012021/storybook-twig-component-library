import template from './input--password.twig';

export default {
  title: 'Atoms/Form/Input Password',
  args: {
    value: '',
    type: 'password',
  },
  argTypes: {
    type: {
      description: 'Defines the type of input field using the type attribute',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'An input text field for entering sensitive details like a password, into a form.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
