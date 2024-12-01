import template from './stories.twig';
import {bgColourArgType} from '../../00-base/utils/arg-types-helper.js';
import storyCardStory from '../../02-molecules/story-card/story-card.story.js';
import fieldItemsContentTemplate from '../../01-atoms/fields/field--items-content.twig';
import storyCardTemplate from '../../02-molecules/story-card/story-card.twig';
import fieldRichTextTemplate from '../../01-atoms/fields/field--rich-text.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';

export default {
  title: 'Organisms/Stories',
  args: {
    title: "Over the sea, on a mountain",
    body: fieldRichTextTemplate({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }),
      }],
    }),
    stories: fieldItemsContentTemplate({
      items: [{
        content: storyCardTemplate(storyCardStory.args),
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


