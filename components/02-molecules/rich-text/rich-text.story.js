import richTextTemplate from "../../01-atoms/fields/field--rich-text.twig";
import headingTemplate from "../../01-atoms/heading/heading.twig";
import paragraphTemplate from "../../01-atoms/text/paragraph.twig";
import buttonTemplate from "../../01-atoms/link-button/link-button.twig";

export default {
  title: "Molecules/Rich Text",
  args: {
    items: [
      {
        content:
          headingTemplate({
            level: 2,
            content: "WYSIWYG heading H2",
          }) +
          headingTemplate({
            level: 3,
            content: "WYSIWYG heading H3",
          }) +
          headingTemplate({
            level: 4,
            content: "WYSIWYG heading H4",
          }) +
          headingTemplate({
            level: 5,
            content: "WYSIWYG heading H5",
          }) +
          paragraphTemplate({
            content: `Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.
            Porttitor magnis faucibus quis sagittis
            <a href="https://unsplash.com/s/photos/travel" target="_blank">this is a link</a> volutpat ipsum dictumst et
            dignissim sed turpis. <a href="https://unsplash.com/s/photos/travel" target="_blank">this is a visited link</a>
            ac neque amet, pharetra, semper. Ipsum pharetra gravida est sit sodales duis lectus.`,
          }) +
          paragraphTemplate({
            content: `Sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis blandit
            neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis ut. Et
            felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.`,
          }) +
          buttonTemplate({
            content: "Button",
            url: "https://unsplash.com/s/photos/travel",
            new_window: true,
          }) +
          paragraphTemplate({
            content: `Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.
            Porttitor magnis faucibus quis sagittis
            <a href="https://unsplash.com/s/photos/travel" target="_blank">this is a link</a> volutpat ipsum dictumst et
            dignissim sed turpis. <a href="https://unsplash.com/s/photos/travel" target="_blank">this is a visited link</a>
            ac neque amet, pharetra, semper. Ipsum pharetra gravida est sit sodales duis lectus.`,
          }) +
          paragraphTemplate({
            content: `Sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis blandit
            neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis ut. Et
            felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.`,
          }),
      },
    ],
  },
};

const Template = (args) => richTextTemplate({ ...args });

export const Default = Template.bind({});
