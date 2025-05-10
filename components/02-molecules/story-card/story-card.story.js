import template from './story-card.twig';
import image from './dora-palfi.png';
import fieldRichText from '../../01-atoms/fields/field--rich-text.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';

export default {
  title: 'Molecules/Story Card',
  args: {
    image: image,
    title: 'Dora Palfi',
    body: fieldRichText({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: 'I think the biggest thing from Lead2030 has been just the visibility for our organisation; our projects and our mission.',
        }),
      }],
    }),
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    image: {
      type: {name: 'string', required: true},
      description: 'The path to the profile image.',
    },
    title: {
      type: {name: 'string', required: true},
      description: 'The person\'s name.',
    },
    body: {
      type: {name: 'string', required: true},
      description: 'The person\'s story.',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = args => template(args);

export const Default = Template.bind({});
