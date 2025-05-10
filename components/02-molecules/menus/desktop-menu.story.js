import menu from './desktop-menu.twig';
import menuNav from './desktop-menu-nav.twig';
import submenu from './desktop-menu-submenu.twig';
import menuItem from './desktop-menu-item.twig';
import submenuStory from './desktop-menu-submenu.story.js';
// import '../../../../../../modules/contrib/tb_megamenu/dist/base.css'; import from tb contrib module
import DrupalAttribute from 'drupal-attribute';

submenuStory.args.attributes = new DrupalAttribute().setAttribute('role', 'list').addClass(['tbm-submenu', 'tbm-item-child', '!u-block', '!u-opacity-100']);

export default {
  title: 'Molecules/Menus/Desktop Menu/Menu',
  args: {
    attributes: new DrupalAttribute().addClass([
      'tbm',
      'tbm-main',
      'tbm-no-arrows',
      'animate',
      'fading',
      'tbm--mobile-hide',
    ]).setAttribute('id', 'tbm-main').setAttribute('aria-label', 'main navigation'),
    section: 'frontend',
    block_config: {
      'always-show-submenu': '0',
    },
    content: menuNav({
      attributes: new DrupalAttribute().addClass(['level-0', 'items-1']),
      lis: [
        menuItem({
          level: 1,
          section: 'frontend',
          attributes: new DrupalAttribute().setAttribute('aria-level', '1').addClass([
            'tbm-item',
            'level-1',
            'tbm-item--has-dropdown',
          ]),
          submenu: submenu(submenuStory.args),
          link: {
            attributes: new DrupalAttribute()
              .setAttribute('tabindex', '0').setAttribute('aria-expanded', 'false')
              .addClass([
                'tbm-link',
                'level-1',
                'no-link',
                'tbm-toggle',
                'u-cursor-pointer',
              ]),
            title_translate: 'Example menu item 1',
          },
        }),
        menuItem({
          level: 1,
          section: 'frontend',
          attributes: new DrupalAttribute().setAttribute('aria-level', '1').addClass([
            'tbm-item',
            'level-1',
          ]),
          link: {
            attributes: new DrupalAttribute()
              .setAttribute('tabindex', '0').setAttribute('aria-expanded', 'false')
              .addClass([
                'tbm-link',
                'level-1',
                'no-link',
                'tbm-toggle',
                'u-cursor-pointer',
              ]),
            title_translate: 'Example menu item 2',
          },
        }),
      ],
    }),
  },
  argTypes: {},
};

const Template = args => menu({...args});

export const Default = Template.bind({});
