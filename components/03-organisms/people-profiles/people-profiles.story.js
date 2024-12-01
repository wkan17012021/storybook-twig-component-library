import peopleProfileTemplate from './people-profiles.twig';
import profileImage1 from '../../02-molecules/profile-card/rock-climber.jpeg';
import profileImage2 from '../../02-molecules/profile-card/profile-image.jpeg';
import sectionStory from '../../02-molecules/section/section.story.js';
import fieldRichText from '../../01-atoms/fields/field--rich-text.twig';
import profileCardStory
  from '../../02-molecules/profile-card/profile-card.story.js';
import profileCardTemplate
  from '../../02-molecules/profile-card/profile-card.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';

const profileCard1Args = {...profileCardStory.args};
profileCard1Args.image = profileImage1;
const profileCard2Args = {...profileCardStory.args};
profileCard2Args.image = profileImage2;

export default {
  title: 'Organisms/People Profiles',
  args: {
    title: 'People profiles',
    body: fieldRichText({
      label_hidden: true,
      items: [
        {
          content: paragraphTemplate({
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          }),
        },
      ],
    }),
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
    use_columns: true,
    indent_bg: true,
    content: [
      profileCardTemplate(profileCard1Args) +
      profileCardTemplate(profileCard2Args) +
      profileCardTemplate(profileCard1Args),
    ],
    has_overlay: true,
    cta_button: sectionStory.args.cta_button,
  },
  argTypes: sectionStory.argTypes,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Please note that the Javascript for this component has been written for the Drupal JavaScript API, thus it will function only in the context of a Drupal site.',
      },
    },
  },
};

const Template = args => peopleProfileTemplate({...args});

export const Default = Template.bind({});
