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
      content: '14 Irving Street',
      classes: ['u-mb-0'],
    }),
    second_line_address: paragraphTemplate({
      content: 'London, WC2H 7AF',
    }),
    company_telephone: linkTemplate({
      content: '+44 (0)20 3691 8060',
      url: 'tel:+440203691 8060',
      remove_classes: ['u-text-burnt-orange'],
    }),
    company_email: linkTemplate({
      content: 'information@google.com',
      url: 'mailto:information@google.com',
      remove_classes: ['u-text-burnt-orange'],
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
