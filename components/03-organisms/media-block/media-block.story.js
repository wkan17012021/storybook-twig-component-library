import template from './media-block.twig';
import fieldRichTextTemplate from '../../01-atoms/fields/field--rich-text.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';
import imageTemplate from '../../01-atoms/image/image.twig';
import image from './media-block-image.jpg';
import videoTemplate from '../../01-atoms/video/video.twig';
import videoStory from '../../01-atoms/video/video.story.js';
import sectionStory from '../../02-molecules/section/section.story.js';
import {mediaPositionArgType} from '../../00-base/utils/arg-types-helper.js';

const argTypes = {
  ...sectionStory.argTypes,
  media_position: mediaPositionArgType(),
};

export default {
  title: 'Organisms/Media Block',
  args: {
    title: 'Media block image right',
    content: fieldRichTextTemplate({
      label_hidden: true,
      items: [{
        content: paragraphTemplate({
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }),
      }],
    }),
    media: imageTemplate({
      src: image,
      alt: 'An image',
    }),
    cta_button: {
      content: 'Button',
      url: '#',
      type: 'secondary', // @todo this should be dynamic based on background colour
    },
    bg_colour: 'u-bg-orange',
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: argTypes,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});

export const MediaBlockWithLeftImage = Template.bind({});
MediaBlockWithLeftImage.args = {
  title: 'Media block image left',
  media_position: 'left',
};

export const MediaBlockWithRightVideo = Template.bind({});
MediaBlockWithRightVideo.args = {
  title: 'Media block video right',
  media: videoTemplate(videoStory.args),
};

export const MediaBlockWithLeftVideo = Template.bind({});
MediaBlockWithLeftVideo.args = {
  title: 'Media block video left',
  media: videoTemplate(videoStory.args),
  media_position: 'left',
};
