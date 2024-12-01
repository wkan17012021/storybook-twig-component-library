import accordionTemplate from './accordion.twig';
import accordionItemTemplate from './accordion-item.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';
import fieldRichTextTemplate from '../../01-atoms/fields/field--rich-text.twig';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';

export default {
  title: 'Organisms/Accordion',
  args: {
    title: 'Accordion',
    body: fieldRichTextTemplate({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }),
      }],
    }),
    content: [
      accordionItemTemplate({
        title: 'Duis aute irure dolor in reprehenderit in voluptate',
        content: fieldRichTextTemplate({
          label_hidden: true,
          items: [{
            content: paragraphTemplate({
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }) + paragraphTemplate({
              content: 'Duis aute irure dolor in reprehenderit in voluptate velit esseiatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            }),
          }],
        }),
        icons_url: import.meta.env.STORYBOOK_ICONS_URL,
      }) +
      accordionItemTemplate({
        title: 'Duis aute irure dolor in reprehenderit in voluptate',
        content: fieldRichTextTemplate({
          label_hidden: true,
          items: [{
            content: paragraphTemplate({
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }) + paragraphTemplate({
              content: 'Duis aute irure dolor in reprehenderit in voluptate velit esseiatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            }),
          }],
        }),
        icons_url: import.meta.env.STORYBOOK_ICONS_URL,
      }),
    ],
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

const Template = args => accordionTemplate({...args});

export const Default = Template.bind({});
