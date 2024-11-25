// Tailwind helper functions.
import tailwindConfig from '../../../tailwind.config.js';

// Get an array of all custom Tailwind classes of type (border, bg).
export const tailwindClassListHelper = (type) => {
  if (!type) {
    return [''];
  }
  let twClasses = [''];
  for (const color in tailwindConfig.theme.extend.colors) {
    twClasses.push(`${tailwindConfig.prefix}${type}-${color}`);
  }
  return twClasses;
}

// Determine the text colour class based on the background colour.
export const tailwindContrastTextColour = (bgClass) => {
  // For these bg colours the text colour should be white.
  const whiteTextClasses = [
    'u-bg-grey-blue',
    'u-bg-dark-blue',
  ];
  let textClass = 'u-text-black';
  if (whiteTextClasses.includes(bgClass)) {
    textClass = 'u-text-white';
  }
  return textClass;
}
