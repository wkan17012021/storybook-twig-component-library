import template from './form-element-label.twig';

export default {
  title: 'Atoms/Form/Label',
  args: {
    title: 'This is the label or title for your input field.',
  },
  parameters: {
    docs: {
      description: {
        component: 'A label which corresponds to an input field for a form.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});

export const RequiredField = Template.bind({});
RequiredField.args = {
  title: 'This is a required field.',
  required: true,
}



