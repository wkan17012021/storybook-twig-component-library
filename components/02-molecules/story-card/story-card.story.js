import template from './story-card.twig';
import image from './swimmer-coral-reef.jpg';
import fieldRichText from '../../01-atoms/fields/field--rich-text.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';

export default {
  title: 'Molecules/Story Card',
  args: {
    image: image,
    title: 'Neom - Saudi Arabia',
    body: fieldRichText({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: 'Home to kaleidoscopic-colored coral reefs and an abundance of diverse marine life | Islands of NEOM',
        }),
      }],
    }),
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    image: {
      type: {name: 'string', required: true},
      description: 'The path to the profile image.',
    },
    title: {
      type: {name: 'string', required: true},
      description: 'The person\'s name.',
    },
    body: {
      type: {name: 'string', required: true},
      description: 'The person\'s story.',
    },
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

const Template = args => template(args);

export const Default = Template.bind({});
