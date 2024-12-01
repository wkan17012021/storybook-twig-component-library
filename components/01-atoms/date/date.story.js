import template from './date.twig';
import {formatDate} from '../../00-base/utils/date-helper.js';

export default {
  title: 'Atoms/Date', // Rename the story title to avoid conflict
  args: {
    date: new Date().toISOString(),
    datetime: new Date().toISOString(),
  },
  argTypes: {
    date: {
      type: {name: 'string', required: true},
      description: 'A formatted date string (without time).',
      table: {
        type: {summary: 'string'},
      },
      control: {
        type: 'date',
      },
    },
    datetime: {
      type: {name: 'string', required: true},
      description: 'The datetime string.',
      table: {
        type: {summary: 'string'},
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A formatted date string.',
      },
    },
  },
};

const Template = ({date: rawDate, ...args}) => {
  const {datetime, formattedDate} = formatDate(rawDate);
  return template({date: formattedDate, datetime, ...args});
};

export const Default = Template.bind({});
