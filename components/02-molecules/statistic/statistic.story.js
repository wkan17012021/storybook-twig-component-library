import template from './statistic.twig';

export default {
  title: 'Molecules/Statistic',
  args: {
    statistic: '68%',
    heading: 'The benefits of travel',
    body: '68% of people stated that they were more positive after returning from a vacation.',
  },
  argTypes: {
    statistic: {
      type: {name: 'string', required: true},
    },
    description: {
      type: {name: 'string', required: true},
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A statistic.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
