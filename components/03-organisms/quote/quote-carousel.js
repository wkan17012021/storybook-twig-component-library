/**
 * Use native JavaScript first, and jQuery if necessary.
 */
(function (Drupal, once, Swiper) {
  Drupal.behaviors.myThemeQuoteCarousel = {
    attach: function (context) {
      const swiperConfig = {
        a11y: {
          prevSlideMessage: Drupal.t("Previous slide"),
          nextSlideMessage: Drupal.t("Next slide"),
        },
        loop: true,
        slidesPerView: 1,
      };

      once("myThemeQuoteCarousel", ".quote-carousel .swiper", context).forEach(
        function (element) {
          swiperConfig["pagination"] = {
            el: element.parentNode.querySelector(".swiper-paging"),
          };
          new Swiper(element, swiperConfig);
        }
      );
    },
  };
})(Drupal, once, Swiper);
