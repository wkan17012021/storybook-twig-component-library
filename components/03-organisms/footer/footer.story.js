import footerTemplate from './footer.twig';
import logo from '../header/Travel Co Logo.png';
import footerMenuTemplate from '../../02-molecules/menus/footer-menu.twig';
import footerLegalLinksMenuTemplate from '../../02-molecules/menus/footer-legal-links-menu.twig';

export default {
  title: 'Organisms/Footer',
  args: {
    logo_src: logo,
    quicklinks: footerMenuTemplate({
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
    legal_links: footerLegalLinksMenuTemplate({
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
    icons_url: import.meta.env.STORYBOOK_ICONS_URL,
  },
  argTypes: {
    title: {
      type: {name: 'string', required: true},
      description: 'The heading text for the newsletter signup.',
    },
    content: {
      type: {name: 'string', required: true},
      description: 'The body copy text for the newsletter signup.',
    },
  },
};

const Template = args => footerTemplate({...args});

export const Default = Template.bind({});
