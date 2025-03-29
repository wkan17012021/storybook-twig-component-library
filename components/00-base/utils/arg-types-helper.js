import {tailwindClassListHelper} from './tailwind-helper.js';

const args = {
  border_colour: {
    description: 'The border colour class.',
    table: {
      type: {summary: 'string'},
    },
    control: 'select',
    options: tailwindClassListHelper('border'),
  },
  bg_color: {
    description: 'The background colour class.',
    table: {
      type: {summary: 'string'},
    },
    control: 'select',
    options: tailwindClassListHelper('bg'),
  },
  image: {
    control: 'object',
    description: 'An object comprising: the image source (`src`), the alt text (`alt`), the title (`title`).',
    table: {
      type: {summary: 'object'},
    },
  },
  link: {
    control: 'object',
    description: 'An object comprising: the link (`url`), and an object of attributes to add to the link (`attributes`).',
    table: {
      type: {summary: 'object'},
    },
  },
  url: {
    type: {name: 'string'},
    description: 'The value for the href attribute.',
    table: {
      type: {summary: 'string'},
    },
  },
  new_window: {
    description: 'Open the link in a new window/tab.',
    table: {
      defaultValue: {summary: false},
      type: {summary: 'string'},
    },
    control: 'boolean',
  },
  responsive: {
    description: 'Toggle responsive sizing.',
    table: {
      defaultValue: {summary: true},
      type: {summary: 'string'},
    },
    control: 'boolean',
  },
  side_position: {
    description: 'The position of the %type.',
    control: 'select',
    options: [
      '',
      'right',
      'left',
    ],
    table: {
      defaultValue: {summary: 'right'},
      type: {summary: 'string'},
    },
  },
};

export default args;

export const borderColourArgType = (defaultValue, condition) => {
  if (defaultValue) {
    args.border_colour.table.defaultValue = {
      summary: defaultValue,
    };
  }
  if (condition) {
    args.border_colour.if = condition;
  }
  return args.border_colour;
};

export const bgColourArgType = (defaultValue, condition) => {
  if (defaultValue) {
    args.bg_color.table.defaultValue = {
      summary: defaultValue,
    };
  }
  if (condition) {
    args.bg_color.if = condition;
  }
  return args.bg_color;
};

export const imageArgType = (description, condition) => {
  if (description) {
    args.image.description = description + args.image.description;
  }
  if (condition) {
    args.image.if = condition;
  }
  return args.image;
};

export const linkArgType = (description) => {
  if (description) {
    args.link.description = description + args.link.description;
  }
  return args.link;
};

export const newWindowArgType = (description) => {
  if (description) {
    args.new_window.description = description + args.new_window.description;
  }
  return args.new_window;
};

export const urlArgType = (description) => {
  if (description) {
    args.url.description = description + args.url.description;
  }
  return args.url;
};

export const responsiveArgType = () => {
  return args.responsive;
};

export const imagePositionArgType = () => {
  args.side_position.description = args.side_position.description.replace('%type', 'image');
  return args.side_position;
};

export const mediaPositionArgType = () => {
  args.side_position.description = args.side_position.description.replace('%type', 'media');
  return args.side_position;
};

export const alignmentArgType = () => {
  args.side_position.description = args.side_position.description.replace('%type', 'media');
  args.side_position.table.defaultValue.summary = 'left';
  args.side_position.options =
      [
        '',
        'left',
        'right',
        'centre',
      ];
  return args.side_position;
};
