/**
 * Use native JavaScript first, and jQuery if necessary.
 */
(function (Drupal, once, Swiper, $) {
  Drupal.behaviors.myThemeStoriesCarousel = {
    attach: function (context) {
      const swiperConfig = {
        a11y: {
          prevSlideMessage: Drupal.t("Previous slide"),
          nextSlideMessage: Drupal.t("Next slide"),
        },
        loop: true,
        slidesPerView: 1,
        breakpoints: {
          534: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: "auto",
          },
        },
      };

      once("myThemeStoriesCarousel", ".stories .swiper", context).forEach(
        function (element) {
          swiperConfig["pagination"] = {
            el: element.parentNode.querySelector(".swiper-paging"),
          };
          new Swiper(element, swiperConfig);
        }
      );

      $(once("myThemeStoryCard", ".stories .story-card", context)).on(
        "click",
        function (e) {
          e.preventDefault();
          $(e.currentTarget)
            .toggleClass("active")
            .siblings(".story-card")
            .removeClass("active");
        }
      );
    },
  };
})(Drupal, once, Swiper, jQuery);
