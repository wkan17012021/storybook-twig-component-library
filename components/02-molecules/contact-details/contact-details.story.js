import contactDetailsTemplate from './contact-details.twig';
import headingTemplate from '../../01-atoms/heading/heading.twig';
import paragraphTemplate from '../../01-atoms/text/paragraph.twig';
import linkTemplate from '../../01-atoms/link/link.twig';

export default {
  title: 'Molecules/Contact Details',
  args: {
    title: headingTemplate({
      content: 'Contact us',
      level: 5,
      classes: ['u-text-lg'],
    }),
    first_line_address: paragraphTemplate({
      content: 'Digital Depot, The Digital Hub',
      classes: ['u-mb-0'],
    }),
    second_line_address: paragraphTemplate({
      content: 'Roe Lane, Off Thomas Street, Dublin D08 TCV4',
    }),
    company_telephone: linkTemplate({
      content: '+44 (0)20 1234 5678',
      url: 'tel:+440201234 5678',
      remove_classes: ['u-text-red'],
    }),
    company_email: linkTemplate({
      content: 'information@website.com',
      url: 'mailto:information@website.com',
      remove_classes: ['u-text-red'],
      classes: ['u-underline', 'u-break-words'],
    }),
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

const Template = args => contactDetailsTemplate({...args});

export const Default = Template.bind({});
