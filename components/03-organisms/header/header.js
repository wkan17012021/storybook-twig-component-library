/**
 * Use native JavaScript first, and jQuery if necessary.
 */
(function ($, Drupal) {
  Drupal.behaviors.header = {
    attach: function (context) {
      // Mobile menu.
      once("myThemeMobileMenu", "#myThemeMobileMenu", context).forEach(
        (element) => {
          const container = $(
            '<div class="u-bg-white u-flex u-flex-col u-items-center u-gap-5 u-px-2 u-pt-4 u-pb-5" />'
          )[0];

          // Clone secondary nav into mobile menu.
          if (document.querySelector("#secondary-menu-container")) {
            container.append(
              document
                .querySelector("#secondary-menu-container")
                .cloneNode(true)
            );
          }
          // Clone search form into mobile menu.
          if (document.querySelector("#block-mytheme-header-search--2 > form")) {
            container.append(
              document
                .querySelector("#block-mytheme-header-search--2 > form")
                .cloneNode(true)
            );
          }
          // Clone subscribe button into mobile menu.
          if (document.querySelector(".header-subscribe-button > a")) {
            container.append(
              document
                .querySelector(".header-subscribe-button > a")
                .cloneNode(true)
            );
          }

          element.append(container);
          $(element).myThemeMobileMenu();
        }
      );
      // Desktop menu.
      once("myThemeDesktopMenu", "body", context).forEach((element) => {
        const initialScrollY = Math.trunc(window.scrollY);
        let lastScrollY;
        // Sometimes the window scroll event listener doesn't fire on page load even when the page is scrolled.
        if (initialScrollY > 2 && !lastScrollY) {
          element.classList.add("header-on-canvas");
        }
        // Hide the header when scrolling down, and show when scrolling up.
        window.addEventListener("scroll", () => {
          const thisScrollY = Math.trunc(window.scrollY),
            header = document.getElementById("pageHeader"),
            menuOffsetBottom = parseFloat($("#desktopMenu").css("bottom")) * -1,
            headerHeight = header.offsetHeight + menuOffsetBottom;

          if (thisScrollY <= 2) {
            // Scrolled to top.
            element.classList.remove("header-off-canvas");
            element.classList.remove("header-on-canvas");
          } else if (lastScrollY > thisScrollY + 1) {
            // Scrolling up
            element.classList.remove("header-off-canvas");
            element.classList.add("header-on-canvas");
          } else if (lastScrollY < thisScrollY) {
            // Scroll down.
            // If the amount of scroll is at least height of header.
            if (thisScrollY >= headerHeight) {
              element.classList.add("header-off-canvas");
              element.classList.remove("header-on-canvas");
            }
          } else if (initialScrollY === 0 || initialScrollY === thisScrollY) {
            // On load where:
            // 1) the page loads at top of page, then jumps to scroll position.
            // 2) initial load equals scroll position.
            element.classList.add("header-on-canvas");
          }
          lastScrollY = thisScrollY;
        });
      });
    },
  };
})(jQuery, Drupal, once);
