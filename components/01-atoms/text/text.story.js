import paragraphTemplate from './paragraph.twig';
import smallTextTemplate from './small-text.twig';

export default {
  title: 'Atoms/Text',
  args: {
    content:
      `We believe the best outcomes occur when people are in control of their health, with information they understand. We have signed up to the Health Charter by Public Health England. Using a technique called “sorting important’ we work with people to identify ways they can balance being happy and content with being healthy and safe.`,
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
