import template from './textarea.twig';

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
