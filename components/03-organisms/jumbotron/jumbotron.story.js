import template from './jumbotron.twig';
import sectionStory from '../../02-molecules/section/section.story.js';

export default {
  title: 'Organisms/Jumbotron',
  args: {
    title: 'Got the travel bug?',
    body: 'Sign up to receive news and updates.',
    cta_button: sectionStory.args.cta_button,
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: sectionStory.argTypes,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});
