(function ($, Drupal, once, drupalSettings) {
  Drupal.behaviors.peopleProfiles = {
    attach: function (context) {
      once(
        "peopleProfiles",
        ".people-profiles .section__content-wrapper",
        context
      ).forEach((element) => {
        let $overlayBg = $(element)
          .parents("section")
          .find(".section-overlay-bg");
        // Click event for card profile to show profile overlay.
        $(".card--profile", element)
          .addClass("u-cursor-pointer")
          .click((e) => {
            $(e.currentTarget)
              .next(".profile-card-overlay")
              .removeClass("u-hidden");
            // Only show the overlay background on LG devices.
            $overlayBg.removeClass("lg:u-hidden").addClass("lg:u-block");
          });
        // Click event for profile overlay close button.
        $(".profile-card-overlay__close", element).click((e) => {
          e.preventDefault();
          $(e.currentTarget)
            .parents(".profile-card-overlay")
            .addClass("u-hidden");
          $overlayBg.addClass("lg:u-hidden").removeClass("lg:u-block");
        });
        // Click event for overlay bg.
        $overlayBg.click((e) => {
          $overlayBg.addClass("lg:u-hidden").removeClass("lg:u-block");
          $overlayBg
            .parents("section")
            .find(".profile-card-overlay:visible")
            .addClass("u-hidden");
        });
      });
    },
  };
})(jQuery, Drupal, once, drupalSettings.myTheme);
