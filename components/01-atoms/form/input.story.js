import template from './input.twig';

export default {
  title: 'Atoms/Form/Input Text',
  args: {
    value: '',
  },

  parameters: {
    docs: {
      description: {
        component: 'An input text field for a form.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});




