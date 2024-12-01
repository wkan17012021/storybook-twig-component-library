/**
 * Use native JavaScript first, and jQuery if necessary.
 */
(function (Drupal, once, Swiper) {
  Drupal.behaviors.ctaCarousel = {
    attach: function (context) {
      const swiperConfig = {
        a11y: {
          prevSlideMessage: Drupal.t('Previous slide'),
          nextSlideMessage: Drupal.t('Next slide'),
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
      };

      once('ctaCarousel', '.cta-carousel .swiper', context).forEach(function (element) {
        swiperConfig['pagination'] = {
          el: element.parentNode.querySelector('.swiper-paging'),
        };
        swiperConfig['navigation'] = {
          nextEl: element.parentNode.querySelector('.swiper-next'),
          prevEl: element.parentNode.querySelector('.swiper-prev'),
        };
        new Swiper(element, swiperConfig);
      });
    },
  };
})(Drupal, once, Swiper);
