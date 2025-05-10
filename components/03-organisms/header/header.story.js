import headerTemplate from './header.twig';
import navTemplate from '../../02-molecules/navigation/nav.twig';
import secondaryMenuTemplate from '../../02-molecules/menus/secondary-menu.twig';
import searchFormTemplate from '../../02-molecules/search-form/search-form.twig';
import formElementTemplate from '../../01-atoms/form/form-element.twig';
import formElementLabelTemplate from '../../01-atoms/form/form-element-label.twig';
import inputTemplate from '../../01-atoms/form/input.twig';
import inputSubmitTemplate from '../../01-atoms/form/input--submit.twig';
import desktopMenuTemplate from '../../02-molecules/menus/desktop-menu.twig';
import logo from './logo.svg';
import desktopMenuStory from '../../02-molecules/menus/desktop-menu.story.js';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Organisms/Header',
  args: {
    logo_src: logo,
    secondary_nav: navTemplate({
      content: secondaryMenuTemplate({
        items: [
          {
            url: '#',
            title: 'Example link 1',
          },
          {
            url: '#',
            title: 'Example link 2',
          },
        ],
      }),
    }),
    search_form: searchFormTemplate({
      children: formElementTemplate({
        title_display: 'invisible',
        type: 'search',
        title: 'Search',
        name: 'keys',
        description_display: 'after',
        label_display: 'invisible',
        label: formElementLabelTemplate({
          title: 'Search',
          title_display: 'invisible',
        }),
        children: inputTemplate({
          attributes: new DrupalAttribute().setAttribute('type','search'),
        }),
      }) +
      inputSubmitTemplate({
        value: 'Search',
        icons_url: import.meta.env.STORYBOOK_ICONS_URL,
      }),
    }),
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
    main_nav: desktopMenuTemplate(desktopMenuStory.args),
  },
  argTypes: {},
};

const Template = args => headerTemplate({...args});

export const Default = Template.bind({});
