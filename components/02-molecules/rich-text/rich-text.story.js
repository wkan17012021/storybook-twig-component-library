import richTextTemplate from '../../01-atoms/fields/field--rich-text.twig';
import media from '../media-item/media--full.twig';
import image from './image.jpg';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Molecules/Rich Text',
  args: {
    multiple: false,
    label_hidden: true,
    items: [
      {
        content: `
            <h2>WYSIWYG heading H2</h2>
            <h3>WYSIWYG heading H3</h3>
            <h4>WYSIWYG heading H4</h4>
            <h5>WYSIWYG heading H5</h5>
            <h6>WYSIWYG heading H6</h6>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.
            Porttitor magnis faucibus quis sagittis
            <a href="https://www.madeupwebsite.com/" target="_blank">this is a link</a> volutpat ipsum dictumst et
            dignissim sed turpis. <a href="https://www.oneyoungworld.com/" target="_blank">this is a visited link</a>
            ac neque amet, pharetra, semper. Ipsum pharetra gravida est sit sodales duis lectus.</p>
            <p><a href="https://www.madeupwebsite.com/" target="_blank" class="myTheme-link-button">This is a link button</a></p>
            <h2>Bulleted list</h2>
            <ul>
              <li>Long list item hendrerit tincidunt mauris diam eget leo vitae metus tortor. Penatibus facilisi nullam sagittis elementum eros purus torquent sapien.</li>
              <li>Short list item sem aliquam rhoncus non phasellus id.</li>
              <li>Long list item hendrerit tincidunt mauris diam eget leo vitae metus tortor. Penatibus facilisi nullam sagittis elementum eros purus torquent sapien.</li>
              <li>Short list item sem aliquam rhoncus non phasellus id.</li>
            </ul>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Numbered list</h2>
            <ol>
              <li>Long list item hendrerit tincidunt mauris diam eget leo vitae metus tortor. Penatibus facilisi nullam sagittis elementum eros purus torquent sapien.</li>
              <li>Short list item sem aliquam rhoncus non phasellus id.</li>
              <li>Long list item hendrerit tincidunt mauris diam eget leo vitae metus tortor. Penatibus facilisi nullam sagittis elementum eros purus torquent sapien.</li>
              <li>Short list item sem aliquam rhoncus non phasellus id.</li>
              <li>Long list item hendrerit tincidunt mauris diam eget leo vitae metus tortor. Penatibus facilisi nullam sagittis elementum eros purus torquent sapien.</li>
              <li>Short list item sem aliquam rhoncus non phasellus id.</li>
              <li>Long list item hendrerit tincidunt mauris diam eget leo vitae metus tortor. Penatibus facilisi nullam sagittis elementum eros purus torquent sapien.</li>
              <li>Short list item sem aliquam rhoncus non phasellus id.</li>
              <li>Long list item hendrerit tincidunt mauris diam eget leo vitae metus tortor. Penatibus facilisi nullam sagittis elementum eros purus torquent sapien.</li>
              <li>Short list item sem aliquam rhoncus non phasellus id.</li>
              <li>Long list item hendrerit tincidunt mauris diam eget leo vitae metus tortor. Penatibus facilisi nullam sagittis elementum eros purus torquent sapien.</li>
              <li>Short list item sem aliquam rhoncus non phasellus id.</li>
            </ol>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Image break text</h2>` + media({
              content: `<img loading="lazy" src="` + image + `" width="480" height="270" alt="Alt text." class="u-w-full u-h-auto">`,
            }) + `
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Image align left and wrap text</h2>`+ media({
              attributes: new DrupalAttribute().addClass('align-left'),
              content: `<img loading="lazy" src="` + image + `" width="480" height="270" alt="Alt text." class="u-w-full u-h-auto">`,
            }) +`
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Image align centre and wrap text</h2>`+ media({
              attributes: new DrupalAttribute().addClass('align-center'),
              content: `<img loading="lazy" src="` + image + `" width="480" height="270" alt="Alt text." class="u-w-full u-h-auto">`,
            }) +`
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Image align right and wrap text</h2>`+ media({
              attributes: new DrupalAttribute().addClass('align-right'),
              content: `<img loading="lazy" src="` + image + `" width="480" height="270" alt="Alt text." class="u-w-full u-h-auto">`,
            }) +`
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Video break text</h2>` + media({
              content: `<iframe src="https://www.youtube.com/embed/c8wKrKVHe1k" width="200" height="113" class="media-oembed-content u-aspect-video u-w-full u-h-auto" loading="lazy" title="Is There Hope in the Fight Against Climate Change? | One Young World at COP28"></iframe>`,
            }) + `
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Video align left and wrap text</h2>`+ media({
              attributes: new DrupalAttribute().addClass('align-left'),
              content: `<iframe src="https://www.youtube.com/embed/c8wKrKVHe1k" width="200" height="113" class="media-oembed-content u-aspect-video u-w-full u-h-auto" loading="lazy" title="Is There Hope in the Fight Against Climate Change? | One Young World at COP28"></iframe>`,
            }) +`
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Video align centre and wrap text</h2>` + media({
              attributes: new DrupalAttribute().addClass('align-center'),
              content: `<iframe src="https://www.youtube.com/embed/c8wKrKVHe1k" width="200" height="113" class="media-oembed-content u-aspect-video u-w-full u-h-auto" loading="lazy" title="Is There Hope in the Fight Against Climate Change? | One Young World at COP28"></iframe>`,
            }) + `
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <h2>Video align right and wrap text</h2>` + media({
              attributes: new DrupalAttribute().addClass('align-right'),
              content: `<iframe src="https://www.youtube.com/embed/c8wKrKVHe1k" width="200" height="113" class="media-oembed-content u-aspect-video u-w-full u-h-auto" loading="lazy" title="Is There Hope in the Fight Against Climate Change? | One Young World at COP28"></iframe>`,
            }) + `
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
            <p>Body copy sed enim odio fames pretium cum viverra nibh egestas. Sagittis, tempor a mattis lectus. Mattis
            blandit neque dui pharetra senectus consequat et tempus viverra. Sed laoreet sed augue facilisis venenatis
            ut. Et felis convallis condimentum bibendum eget natoque sem. Felis, pretium morbi rutrum a donec.</p>
        `,
      },
    ],
  },
};

const Template = args => richTextTemplate({...args});

export const Default = Template.bind({});
