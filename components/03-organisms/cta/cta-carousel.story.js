import template from './cta-carousel.twig';
import ctaTemplate from '../../02-molecules/cta/cta.twig';
import ctaStory from '../../02-molecules/cta/cta.story.js';
import fieldItemsContentTemplate from '../../01-atoms/fields/field--items-content.twig';

export default {
  title: 'Organisms/CTAs/CTA Carousel',
  args: {
    content: [
      fieldItemsContentTemplate({
        items: [{
          content: ctaTemplate(ctaStory.args),
        }],
      }),
    ],
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A collection of call-to-actions without images. Carousel feature on mobile not functional in SB.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
