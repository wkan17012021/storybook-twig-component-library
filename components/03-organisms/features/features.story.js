import FeaturesTemplate from './features.twig';
import ImageSource from '../../02-molecules/cards/Ao Nang Beach Golden Sunset In Krabi Thailand.jpg';
import CardTemplate from '../../02-molecules/cards/card.twig';
import {formatDate} from '../../00-base/utils/date-helper.js';
import sectionStory from '../../02-molecules/section/section.story.js';

export default {
  title: 'Organisms/Features',
  args: {
    title: 'Features component',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    content: [CardTemplate({
      image: {
        src: ImageSource,
        alt: 'Krabi sunset, Thailand',
        title: 'Krabi sunset, Thailand',
      },
      title: 'Single feature title',
      date: new Date().toISOString(),
      datetime: new Date().toISOString(),
      body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    }) +
    CardTemplate({
      image: {
        src: ImageSource,
        alt: 'Krabi sunset, Thailand',
        title: 'Krabi sunset, Thailand',
      },
      title: 'Single feature title',
      date: new Date().toISOString(),
      datetime: new Date().toISOString(),
      body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    }) +
    CardTemplate({
      image: {
        src: ImageSource,
        alt: 'Krabi sunset, Thailand',
        title: 'Krabi sunset, Thailand',
      },
      title: 'Single feature title',
      date: new Date().toISOString(),
      datetime: new Date().toISOString(),
      body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    }),
    ],
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
    cta_button: {
      url: '#',
      content: 'Button',
    },
  },
  argTypes: sectionStory.argTypes,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = ({date, ...args}) => {
  const {datetime, formattedDate} = formatDate(date);

  return FeaturesTemplate({
    ...args,
    date_time: datetime,
    date: formattedDate,
  });
};

export const Default = Template.bind({});
