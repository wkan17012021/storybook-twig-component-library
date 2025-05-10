/**
 * Use native JavaScript first, and jQuery if necessary.
 */
(function (Drupal, once) {
  Drupal.behaviors.card = {
    attach: function (context) {
      once('ctaWithImage', '.cta-with-image', context).forEach(function (element) {
        const url = element.getAttribute('data-url');
        if (url) {
          element.classList.add('u-cursor-pointer');
          element.addEventListener('click', () => {
            window.location.href = url;
          });
        }
      });
    },
  };
})(Drupal, once);
