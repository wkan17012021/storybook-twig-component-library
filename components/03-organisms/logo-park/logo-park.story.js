import parkTemplate from './logo-park.twig';
import expediaLogo from './expedia_logo.png';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';
import imageTemplate from '../../01-atoms/image/image.twig';
import fieldRichTextTemplate from '../../01-atoms/fields/field--rich-text.twig';
import fieldTemplate from '../../01-atoms/fields/field.twig';
import mediaItemTemplate from '../../02-molecules/media-item/media-item.twig';
import fieldBlockContentFieldImagesTemplate from '../../01-atoms/fields/field--block-content--field-images.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';

export default {
  title: 'Organisms/Logo Park',
  args: {
    title: 'Logo park component',
    body: fieldRichTextTemplate({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        }),
      }],
    }),
    content: [
      fieldBlockContentFieldImagesTemplate({
        items: [{
          content: mediaItemTemplate({
            content: fieldTemplate({
              multiple: false,
              label_hidden: true,
              items: [{
                content: imageTemplate({
                  src: expediaLogo,
                  alt: 'Expedia',
                  responsive: false,
                }),
              }],
            }),
            classes: [
              'swiper-slide',
              'u-flex',
              'u-justify-center',
            ]
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

const Template = args => parkTemplate({...args});

export const Default = Template.bind({});
