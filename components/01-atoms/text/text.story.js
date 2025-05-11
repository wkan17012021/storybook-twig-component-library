import paragraphTemplate from './paragraph.twig';
import smallTextTemplate from './small-text.twig';

export default {
  title: 'Atoms/Text',
  args: {
    content:
      `A travel tracker to capture every awesome moment!
Keeping your phone in your pocket and your eyes on the world. Share it with everyone — from your roommate to your soulmate — or keep it to yourself.`,
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
