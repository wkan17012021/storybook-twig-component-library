import statsTemplate from './statistics.twig';
import statTemplate from '../../02-molecules/statistic/statistic.twig';
import sectionStory from '../../02-molecules/section/section.story.js';
import fieldRichTextTemplate from '../../01-atoms/fields/field--rich-text.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';

export default {
  title: 'Organisms/Statistics',
  args: {
    title: 'Statistics component',
    body: fieldRichTextTemplate({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        }),
      }],
    }),
    use_columns: true,
    content: [statTemplate({
      statistic: '2-3',
      heading: 'Days',
      body: fieldRichTextTemplate({
        label_hidden: true,
        items: [{
          content: paragraphTemplate({
            content: ' of vacation can improve reaction time by 80% and have significant improvements in sleep',
          }),
        }],
      }),
    }) + statTemplate({
      statistic: '52%',
      heading: 'of people ',
      body: fieldRichTextTemplate({
        label_hidden: true,
        items: [{
          content: paragraphTemplate({
            content: 'stated that their connection with their loved one improved during a vacation.',
          }),
        }],
      }),
    }),
    ],
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
    cta_button: sectionStory.args.cta_button,
    bg_colour: 'u-bg-light-blue',
  },
  argTypes: sectionStory.argTypes,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = args => statsTemplate({...args});

export const Default = Template.bind({});
