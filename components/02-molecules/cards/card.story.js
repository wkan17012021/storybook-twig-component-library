import cardTemplate from './card.twig';
import imageSource from './Ao Nang Beach Golden Sunset In Krabi Thailand.jpg';
import {formatDate} from '../../00-base/utils/date-helper.js';
import imageStory from '../../01-atoms/image/image.story.js';
import headingStory from '../../01-atoms/heading/heading.story.js';
import dateStory from '../../01-atoms/date/date.story.js';
import {bgColourArgType, imageArgType} from '../../00-base/utils/arg-types-helper.js';

let args = {
  title: 'Molecules/Card',
  args: {
    image: {
      src: imageSource,
      alt: 'Sunset beach',
      title: 'Sunset beach',
    },
    title: 'Title',
    url: 'http://www.google.com',
    date: new Date().toISOString(),
    datetime: new Date().toISOString(),
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  argTypes: {
    type: {
      description: 'The card type.',
      control: 'select',
      options: [
        'default',
        'scholarship',
        'event_opp',
        'news',
        'speaker_counsellor',
      ],
      table: {
        defaultValue: {summary: 'default'},
        type: {summary: 'string'},
      },
    },
    body: {
      type: {name: 'string', required: true},
      description: 'The card body.',
    },
    featured: {
      description: 'Toggle featured tag styling.',
      table: {
        defaultValue: {summary: 'false'},
        type: {summary: 'string'},
      },
      control: 'boolean',
    },
    event_type: {
      control: 'object',
      description: 'An object comprising: the label (`label`), the URL (`url`) and to open in a new window (`new_window: true`).',
      table: {
        type: {summary: 'object'},
      },
    },
    bg_colour: bgColourArgType('u-bg-neutral-grey'),
    image: imageArgType(),
    title: headingStory.argTypes.content,
    title_heading_level: headingStory.argTypes.level,
    date: {
      ...dateStory.argTypes.date,
      ...{
        type: {name: 'string', required: false},
      },
    },
    datetime: {
      ...dateStory.argTypes.datetime,
      ...{
        type: {name: 'string', required: false},
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Similar card variants.',
      },
    },
  },
};

// Reconfigure imported arguments.
args.argTypes.title_heading_level.type.required = false;
args.argTypes.title_heading_level.table.defaultValue.summary = 4;

export default args;

const Template = ({date, ...args}) => {
  const {datetime, formattedDate} = formatDate(date);

  return cardTemplate({
    ...args,
    date_time: datetime,
    date: formattedDate,
  });
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

export const ScholarshipCard = Template.bind({});
ScholarshipCard.args = {
  type: 'scholarship',
};

export const EventCard = Template.bind({});
EventCard.args = {
  type: 'event_opp',
  event_type: 'Opportunity',
};

export const NewsCard = Template.bind({});
NewsCard.args = {
  type: 'news',
};

export const SpeakerCard = Template.bind({});
SpeakerCard.args = {
  type: 'speaker_counsellor',
  date: '',
  datetime: '',
};
