/**
 * Use native JavaScript first, and jQuery if necessary.
 */
(function ($, Drupal) {
  Drupal.behaviors.Accordion = {
    attach: function (context) {
      // Accordion item toggle.
      $(once('myThemeAccordionItem', '.accordion-item__button', context))
        .on('toggle', function () {
          const $target = $('#' + this.getAttribute('aria-controls')),
            icon = $('.icon', this)[0];
          let expanded = this.getAttribute('aria-expanded');

          if (expanded === 'false') {
            // Expand.
            $target.slideDown();
            expanded = true;
          } else {
            // Collapse.
            $target.slideUp();
            expanded = false;
          }

          icon.classList.remove(expanded ? 'u-rotate-90' : '-u-rotate-90');
          icon.classList.add(expanded ? '-u-rotate-90' : 'u-rotate-90');
          this.setAttribute('aria-expanded', expanded);
        })
        .on('click', function () {
          $(this).trigger('toggle');
        });

      // Initialise each accordion.
      once('myThemeAccordionInit', '.accordion', context).forEach((element) => {
        // Expand the first item in each accordion.
        const button = $('.accordion-item:first .accordion-item__button', element)[0],
          icon = $('.icon', button)[0],
          content = document.getElementById(button.getAttribute('aria-controls'));

        icon.classList.remove('u-rotate-90');
        icon.classList.add('-u-rotate-90');
        button.setAttribute('aria-expanded', 'true');
        content.style.display = 'block';
      });

    },
  };
})(jQuery, Drupal, once);
