import template from './select.twig';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Atoms/Form/Select',
  args: {
    options: [
      {type: 'option', value: 'Select', label: 'Select location'},
      {type: 'option', value: 'Afghanistan', label: 'Afghanistan'},
      {type: 'option', value: 'Albania', label: 'Albania'},
      {type: 'option', value: 'Algeria', label: 'Algeria'},
      {type: 'option', value: 'Andorra', label: 'Andorra'},
      {type: 'option', value: 'Angola', label: 'Angola'},
    ],
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  parameters: {
    docs: {
      description: {
        component: 'A multiple option drop down list control for a form.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});

export const InError = Template.bind({});
InError.args = {
  attributes: new DrupalAttribute().addClass('error'),
};
