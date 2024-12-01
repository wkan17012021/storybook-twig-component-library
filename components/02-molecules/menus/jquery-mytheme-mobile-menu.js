/**
 * Based on JQuery Simple MobileMenu
 * https://github.com/Position2/jQuery-Simple-MobileMenu
 */
(($) => {
  let defaults = {
    toggleSelector: '#myThemeMobileMenuToggle',
    headerSelector: '.layout-container > header',
    submenuClass: 'submenu',
  };
  $.fn.myThemeMobileMenu = function (options) {
    if (!this.length)
      return this;

    const $menu = $(this),
      settings = $.extend({}, defaults, options),
      $menuToggle = $(settings.toggleSelector),
      $body = $('body'),
      $window = $(window);

    const init = () => {
      setup();
      clickEvents();
      positionMenu();
      $window.resize(positionMenu);
    };
    const setup = () => {
      $menu
        .appendTo($body)
        .find('ul.' + settings.submenuClass)
        .each(function () {
          $(this).closest('li').addClass('has-child');
        });
    };
    const clickEvents = () => {
      $menuToggle.click(toggleMenu);
      $menu.find('li.has-child > a').click(toggleSubmenu);
    };
    const positionMenu = function () {
      const $header = $(defaults.headerSelector),
          menuOffsetTop = $header[0].offsetTop + $header.height();
      $menu.css('height', `calc(100vh - ${menuOffsetTop}px)`);
    };
    const toggleMenu = function () {
      $body.toggleClass('u-overflow-hidden');
      $menuToggle.toggleClass('open');
      $menu
        .toggleClass('active')
        .find('li.active')
        .removeClass('active')
        .end()
        .find('ul.' + settings.submenuClass)
        .hide();
    };
    const toggleSubmenu = function (e) {
      e.preventDefault();
      const dis = $(this),
        dispar = $(this).parent(),
        lastActive = dispar.siblings('.active');

      dispar.find('> .' + settings.submenuClass).slideToggle(function () {
        if ($(this).is(':visible')) {
          const offset = dis[0].offsetTop;
          $menu.stop().animate({scrollTop: offset}, 300);
        }
      });

      lastActive.find('ul.' + settings.submenuClass).slideUp(function () {
        $(this).find('.has-child').removeClass('active');
      });
      dispar.toggleClass('active').siblings().removeClass('active');
    };
    init();
  };
})(jQuery);
