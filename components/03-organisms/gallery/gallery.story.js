import galleryTemplate from './gallery.twig';
import image from './caver.jpeg';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';
import imageTemplate from '../../01-atoms/image/image.twig';
import fieldRichTextTemplate from '../../01-atoms/fields/field--rich-text.twig';
import fieldCarouselTemplate from '../../01-atoms/fields/field--carousel-image.twig';
import mediaItemTemplate from '../../02-molecules/media-item/media-item.twig';
import fieldBlockContentFieldImagesTemplate from '../../01-atoms/fields/field--block-content--field-images.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';

export default {
  title: 'Organisms/Gallery',
  args: {
    title: 'Gallery component',
    body: fieldRichTextTemplate({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        }),
      }],
    }),
    images: [
      fieldBlockContentFieldImagesTemplate({
        items: [{
          content: mediaItemTemplate({
            content: fieldCarouselTemplate({
              items: [{
                content: imageTemplate({
                  src: image,
                  alt: 'Caver',
                  responsive: true,
                }),
              }],
            }),
          }),
        }],
      }),
    ],
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
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

const Template = args => galleryTemplate({...args});

export const Default = Template.bind({});
