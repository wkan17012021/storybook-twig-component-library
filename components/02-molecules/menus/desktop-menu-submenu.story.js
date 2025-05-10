import submenu from './desktop-menu-submenu.twig';
import menuItem from './desktop-menu-item.twig';
import menuRow from './desktop-menu-row.twig';
import menuColumn from './desktop-menu-column.twig';
import subnav from './desktop-menu-subnav.twig';
import {Level2WithLink} from './desktop-menu-item.story.js';
// import '../../../../../../modules/contrib/tb_megamenu/dist/base.css';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Molecules/Menus/Desktop Menu/Submenu',
  args: {
    attributes: new DrupalAttribute().setAttribute('role', 'list').addClass(['tbm-submenu', 'tbm-item-child', '!u-block', '!u-top-0']),
    rows: [
      menuRow({
        attributes: new DrupalAttribute().addClass(['tbm-row']),
        columns: [
          menuColumn({
            attributes: new DrupalAttribute().addClass(['tbm-column', 'span6']),
            tb_items: [
              subnav({
                attributes: new DrupalAttribute().setAttribute('role', 'list').addClass(['tbm-subnav', 'level-1', 'items-4']),
                lis: [
                  menuItem(Level2WithLink.args),
                  menuItem(Level2WithLink.args),
                  menuItem(Level2WithLink.args),
                  menuItem(Level2WithLink.args),
                ],
              }),
            ],
          }),
          menuColumn({
            attributes: new DrupalAttribute().addClass(['tbm-column', 'span6']),
            tb_items: [
              subnav({
                attributes: new DrupalAttribute().setAttribute('role', 'list').addClass(['tbm-subnav', 'level-1', 'items-4']),
                lis: [
                  menuItem(Level2WithLink.args),
                  menuItem(Level2WithLink.args),
                  menuItem(Level2WithLink.args),
                  menuItem(Level2WithLink.args),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  },
  argTypes: {},
};

const Template = args => submenu({...args});

export const Default = Template.bind({});
