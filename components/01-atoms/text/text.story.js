import paragraphTemplate from './paragraph.twig';
import smallTextTemplate from './small-text.twig';

export default {
  title: 'Atoms/Text',
  args: {
    content:
      `Make a trip request, connect with a local expert, and sit back while our experts craft a custom itinerary based on expertise, exclusivity, and ease. It’s a trip you couldn’t plan yourself, all with 24/7 on-the-ground support.`,
  },
  argTypes: {
    content: {
      type: {name: 'string', required: true},
      description: 'The content.',
      table: {
        type: {summary: 'string'},
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'All text variations.',
      },
    },
  },
};

const ParagraphTemplate = args => paragraphTemplate({...args});
const SmallTextTemplate = args => smallTextTemplate({...args});

export const Paragraph = ParagraphTemplate.bind({});

export const SmallText = SmallTextTemplate.bind({});
SmallText.args = {
  content:
    `Small text and image captions`,
};
