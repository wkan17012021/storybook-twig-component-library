import template from './quote-carousel.twig';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';
import quoteWithImageStory from './quote-with-image.story.js';
import fieldItemsContentTemplate from '../../01-atoms/fields/field--items-content.twig';
import quoteWithImageTemplate from './quote-with-image-content.twig';

export default {
  title: 'Organisms/Quotes/Quote Carousel',
  args: {
    section_content: fieldItemsContentTemplate({
      items: [{
        content: quoteWithImageTemplate(quoteWithImageStory.args),
      }],
    }),
  },
  argTypes: {
    bg_colour: bgColourArgType(),
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Please note that the Javascript for this component has been written for the Drupal JavaScript API, thus it will function only in the context of a Drupal site.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});


