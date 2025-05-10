import cardTemplate from './profile-card.twig';
import cardOverlayTemplate from './profile-card-overlay.twig';
import image from './dora-palfi.png';
import fieldRichText from '../../01-atoms/fields/field--rich-text.twig';
import socialLinksStory from '../social-links/social-links.story.js';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';

export default {
  title: 'Molecules/Profile Card',
  args: {
    image: image,
    title: 'Person Name shows about 38 characters maximum for mobile',
    job: "Job title shows about 31 characters maximum for mobile",
    bio: fieldRichText({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
    job: {
      type: {name: 'string', required: true},
      description: 'The person\'s job.',
    },
    bio: {
      type: {name: 'string', required: true},
      description: 'The person\'s biography.',
    },
    social_links: socialLinksStory.argTypes.links,
  },
  parameters: {
    layout: 'centered', // Ensures the molecule is centered in the Storybook view
  },
};

const CardTemplate = args => cardTemplate({...args});

const CardOverlayTemplate = args => cardOverlayTemplate({
  ...args, ...{
    classes: '!u-block',
  },
});

export const Default = CardTemplate.bind({});

export const ProfileCardWithNameOnly = CardTemplate.bind({});
ProfileCardWithNameOnly.args = {
  job: '',
}

export const ProfileCardOverlay = CardOverlayTemplate.bind({});

export const ProfileCardOverlayWithSocialLinks = CardOverlayTemplate.bind({});
ProfileCardOverlayWithSocialLinks.args = {
  social_links: {
    x: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    website: 'https://www.oneyoungworld.com',
  },
}
