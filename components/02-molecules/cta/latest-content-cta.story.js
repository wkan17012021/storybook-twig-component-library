import template from './cta-with-image.twig';
import imageStory from '../../01-atoms/image/image.story.js';
import ctaImage1 from './cta-image-1.jpeg';
import ctaStory from './cta.story.js';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Molecules/CTA/Latest Content CTA',
  args: {
    title: 'Test Title',
    content: 'Etiam magna lectus, tempor non mollis sit amet, laoreet id urna. Sed vulputate sem id enim ultrices,',
    image: ctaImage1,
    attributes: new DrupalAttribute().setAttribute('data-url', '#'),
  },
  argTypes: {
    ...ctaStory.argTypes,
    image: imageStory.argTypes,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CTA used for the Latest Content organism.',
      },
    },
  },
};

const Template = args => template(args);

export const Default = Template.bind({});
