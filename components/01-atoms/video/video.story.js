import template from './video.twig';
import posterImage from './video-poster.jpg';
import {responsiveArgType} from '../../00-base/utils/arg-types-helper.js';

export default {
  title: 'Atoms/Video',
  args: {
    src: 'https://assets.mixkit.co/videos/41576/41576-720.mp4',
    poster: posterImage,
  },
  argTypes: {
    src: {
      type: {name: 'string', required: true},
      description: 'The path or URL to the video.',
    },
    poster: {
      type: {name: 'string', required: true},
      description: 'The path or URL to the poster image.',
    },
    responsive: responsiveArgType(),
  },
  parameters: {
    docs: {
      description: {
        component: 'A video.',
      },
    },
  },
};

const Template = args => template({...args});

export const Video = Template.bind({});

