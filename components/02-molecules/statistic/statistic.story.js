import template from './statistic.twig';

export default {
  title: 'Molecules/Statistic',
  args: {
    statistic: '42M',
    heading: 'Single stat title',
    body: 'People directly impacted by Ambassador-led projects featured in our Impact Reports since 2010',
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
