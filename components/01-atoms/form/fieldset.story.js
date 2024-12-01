import template from './fieldset.twig';

export default {
  title: 'Atoms/Form/Fieldset',
  args: {
    legend: {
      title: 'This is the label or title for a group of input fields.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A label which corresponds to a group of input fields for a form.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});




