import template from './inline-form.twig';
import selectTemplate from '../../../01-atoms/form/select.twig';
import selectStory from '../../../01-atoms/form/select.story.js';
import formElementTemplate from '../../../01-atoms/form/form-element.twig';
import formElementLabelTemplate from '../../../01-atoms/form/form-element-label.twig';
import formElementLabelStory from '../../../01-atoms/form/form-element-label.story.js';
import inputSubmitTemplate from '../../../01-atoms/form/input--submit.twig';
import inputSubmitStory from '../../../01-atoms/form/input-submit.story.js';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Molecules/Forms/Views Filter Form',
  args: {
    field_count: 1,
    children: [
      formElementTemplate({
          children: selectTemplate({
            ...selectStory.args,
            attributes: new DrupalAttribute().setAttribute('id', 'field-locations-target-id'),
          }),
          type: 'select',
          title_display: 'inline',
          name: 'field-locations-target-id',
          label_display: 'inline',
          label: formElementLabelTemplate({
            ...formElementLabelStory.args,
            title: 'Location',
            attributes: new DrupalAttribute().setAttribute('for', 'field-locations-target-id'),
          }),
        },
      ) +
      inputSubmitTemplate({
        ...inputSubmitStory.args,
        value: 'Filter',
        icons_url: import.meta.env.STORYBOOK_ICONS_URL,
        attributes: new DrupalAttribute().addClass('btn btn-primary'),
      }) +
      inputSubmitTemplate({
        ...inputSubmitStory.args,
        value: 'Clear Filters',
        attributes: new DrupalAttribute().addClass('btn btn-secondary'),
      }),
    ],
  },

  argTypes: {},
  parameters: {
    // Ensures the molecule is centered in the Storybook view.
    layout: 'centered',
    docs: {
      description: {
        component: 'An inline form with single exposed filter or multiple exposed filters.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});

export const MultipleFilters = Template.bind({});
MultipleFilters.args = {
  field_count: 2,
  children: [
    formElementTemplate({
      children: selectTemplate({
        ...selectStory.args,
        attributes: new DrupalAttribute().setAttribute('id', 'field-locations-target-id'),
      }),
      type: 'select',
      title_display: 'before',
      name: 'filter-location',
      label_display: 'before',
      label: formElementLabelTemplate({
        title: 'Location',
        attributes: new DrupalAttribute().setAttribute('for', 'filter-location'),
      }),
    }) +
    formElementTemplate({
      children: selectTemplate({
        icons_url: import.meta.env.STORYBOOK_ICONS_URL,
        attributes: new DrupalAttribute().setAttribute('id', 'filter-location'),
        options: [
          {type: 'option', value: '', label: 'Select topic'},
          {type: 'option', value: 'Affordable and Clean Energy', label: 'Affordable and Clean Energy'},
          {type: 'option', value: 'Clean Water and Sanitation', label: 'Clean Water and Sanitation'},
          {type: 'option', value: 'Climate Action', label: 'Climate Action'},
        ],
      }),
      type: 'select',
      title_display: 'before',
      name: 'filter-topic',
      label_display: 'before',
      label: formElementLabelTemplate({
        title: 'Topic',
        attributes: new DrupalAttribute().setAttribute('for', 'filter-topic'),
      }),
    }) +
    inputSubmitTemplate({
      ...inputSubmitStory.args,
      value: 'Filter',
      icons_url: import.meta.env.STORYBOOK_ICONS_URL,
      attributes: new DrupalAttribute().addClass('btn btn-primary'),
    }) +
    inputSubmitTemplate({
      ...inputSubmitStory.args,
      value: 'Clear Filters',
      attributes: new DrupalAttribute().addClass('btn btn-secondary'),
    }),
  ],
};

