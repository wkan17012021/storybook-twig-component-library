import template from './breadcrumb.twig';

export default {
  title: 'Molecules/Breadcrumb',
  args: {
    breadcrumb: [
      {
        text: 'Home',
        url: '#',
      },
      {
        text: 'Second-level breadcrumb item',
        url: '#',
      },
      {
        text: 'Third-level truncated breadcrumb item',
        url: '#',
      },
    ],
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    breadcrumb: {
      description: 'An array of objects with text and link properties for each breadcrumb link.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Navigation hierarchy links. Mobile design implementation works in Drupal but not in Storybook.',
      },
    },
  },
};

const Template = args => template({...args});
export const Default = Template.bind({});
