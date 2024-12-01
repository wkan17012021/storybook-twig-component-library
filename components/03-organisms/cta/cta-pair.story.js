import template from './cta-pair.twig';
import ctaWithImageStory, {Right as RightCta} from '../../02-molecules/cta/cta-with-image.story.js';

export default {
  title: 'Organisms/CTAs/CTA Pair',
  args: {
    left_cta: {
      ...ctaWithImageStory.args,
    },
    right_cta: {
      ...ctaWithImageStory.args,
      ...RightCta.args,
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A pair of CTAs.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
