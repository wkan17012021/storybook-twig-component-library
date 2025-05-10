import template from './pager.twig';

export default {
  title: 'Molecules/Navigation/Pager',
  args: {
    items: {
      first: {
        href: '?page=1',
      },
      previous: {
        href: '?page=8',
      },
      pages: {
        8: {href: '?page=8'},
        9: {href: '?page=9'},
        10: {href: '?page=10'},
        11: {href: '?page=11'},
      },
      next: {
        href: '?page=10',
      },
      last: {
        href: '?page=11',
      },
    },
    ellipses: {
      previous: true,
      next: true,
    },
    current: 9, // Active page
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    items: {
      description: 'A array of items including previous, next, page items.',
    },
    ellipses: {
      description: 'Toggle ellipses display.',
    },
    current: {
      description: 'Active / Current Page Number',
      control: 'object',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'For splitting information over multiple navigable pages instead of showing it all on a single page.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
