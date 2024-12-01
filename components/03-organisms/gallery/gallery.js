/**
 * Use native JavaScript first, and jQuery if necessary.
 */
(function (Drupal, once, Swiper) {
  Drupal.behaviors.myThemeGallery = {
    attach: function (context) {
      const swiperConfig = {
        a11y: {
          prevSlideMessage: Drupal.t("Previous slide"),
          nextSlideMessage: Drupal.t("Next slide"),
        },
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      };

      once("myThemeGallery", ".gallery .swiper", context).forEach(
        function (element) {
          swiperConfig["pagination"] = {
            el: element.parentNode.querySelector(".swiper-paging"),
          };
          swiperConfig["navigation"] = {
            nextEl: element.parentNode.querySelector(".swiper-next"),
            prevEl: element.parentNode.querySelector(".swiper-prev"),
          };
          new Swiper(element, swiperConfig);
        }
      );
    },
  };
})(Drupal, once, Swiper);
